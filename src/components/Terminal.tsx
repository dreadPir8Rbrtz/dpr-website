import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  budget: string;
  deadline: string;
  description: string;
}

const Terminal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    deadline: '',
    description: ''
  });
  const [messages, setMessages] = useState<string[]>([]);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const questions = [
    'What is your name?',
    'What is your email?',
    'What is your budget? (in USD)',
    'What is your deadline? (e.g., "2 weeks", "3 months")',
    'Brief project description:'
  ];

  const fields: (keyof FormData)[] = ['name', 'email', 'budget', 'deadline', 'description'];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentValue = inputRef.current?.value.trim() || '';
    
    if (currentValue) {
      const newMessages = [...messages];
      newMessages.push(`${questions[currentStep]}`);
      newMessages.push(`$ ${currentValue}`);
      setMessages(newMessages);

      setFormData(prev => ({
        ...prev,
        [fields[currentStep]]: currentValue
      }));

      if (currentStep === questions.length - 1) {
        setShowSubmitButton(true);
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      } else if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      }
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setMessages(prev => [...prev, '$ Submitting your project request...']);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      setMessages(prev => [
        ...prev,
        '$ Thank you! I will review your request and get back to you soon.',
        `$ Summary of your request:`,
        `$ Name: ${formData.name}`,
        `$ Email: ${formData.email}`,
        `$ Budget: ${formData.budget}`,
        `$ Deadline: ${formData.deadline}`,
        `$ Description: ${formData.description}`
      ]);
    } catch (error) {
      console.error('Error submitting message:', error);
      setMessages(prev => [
        ...prev,
        '$ Error: Failed to submit your request. Please try again later.'
      ]);
    } finally {
      setIsSubmitting(false);
      setCurrentStep(questions.length);
      setShowSubmitButton(false);
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="terminal-border bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400">project-request@dreadpir8rbrtz ~ %</span>
      </div>

      {/* Welcome Message */}
      <div className="mb-4 text-[#ff00ff]">
        $ Welcome! Please answer the following questions about your project:
      </div>

      {/* Messages History */}
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          {msg.startsWith('$') ? (
            <span className="text-white">{msg}</span>
          ) : (
            <span className="text-[#00ff00]">{msg}</span>
          )}
        </div>
      ))}

      {/* Input Form */}
      {currentStep < questions.length && !showSubmitButton && (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="text-[#00ff00] mb-2">{questions[currentStep]}</div>
          <div className="flex items-center">
            <span className="text-[#00ff00]">$</span>
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-white ml-2"
              placeholder="Type your answer..."
            />
          </div>
        </form>
      )}

      {/* Submit Button */}
      {showSubmitButton && (
        <button
          onClick={handleFinalSubmit}
          disabled={isSubmitting}
          className={`mt-4 px-4 py-2 bg-[#00ff00] text-black rounded transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00dd00]'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
        </button>
      )}
    </div>
  );
};

export default Terminal;
