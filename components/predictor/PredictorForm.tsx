"use client";

import React from 'react';
import { PredictorInput } from '@/utils/predictorLogic';
import { EXAM_TYPES, COURSE_TYPES, INDIAN_STATES } from '@/data/constants';
import { Button } from '@/components/ui/Button';

interface PredictorFormProps {
  input: PredictorInput;
  isPredicting: boolean;
  onInputChange: (field: keyof PredictorInput, value: string | number) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function PredictorForm({ input, isPredicting, onInputChange, onSubmit }: PredictorFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">College Predictor Engine</h2>
        <p className="text-gray-500">Enter your exam details and preferences to see your chances across top colleges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Rank Input */}
        <div>
          <label htmlFor="rank" className="block text-sm font-bold text-gray-700 mb-2">
            Exam Rank
          </label>
          <input
            id="rank"
            type="number"
            min="1"
            value={input.rank || ''}
            onChange={(e) => onInputChange('rank', parseInt(e.target.value) || 0)}
            placeholder="e.g. 1500"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 text-gray-900 font-medium"
            required
          />
        </div>

        {/* Exam Type */}
        <div>
          <label htmlFor="exam" className="block text-sm font-bold text-gray-700 mb-2">
            Exam Taken
          </label>
          <select
            id="exam"
            value={input.exam}
            onChange={(e) => onInputChange('exam', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 text-gray-900 font-medium appearance-none"
          >
            {EXAM_TYPES.map(exam => (
              <option key={exam} value={exam}>{exam}</option>
            ))}
          </select>
        </div>

        {/* Preferred Course */}
        <div>
          <label htmlFor="course" className="block text-sm font-bold text-gray-700 mb-2">
            Preferred Course
          </label>
          <select
            id="course"
            value={input.course}
            onChange={(e) => onInputChange('course', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 text-gray-900 font-medium appearance-none"
          >
            <option value="All Courses">All Courses (No Preference)</option>
            {COURSE_TYPES.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {/* Preferred State */}
        <div>
          <label htmlFor="state" className="block text-sm font-bold text-gray-700 mb-2">
            Preferred State
          </label>
          <select
            id="state"
            value={input.state}
            onChange={(e) => onInputChange('state', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 text-gray-900 font-medium appearance-none"
          >
            <option value="All States">All States (No Preference)</option>
            {INDIAN_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full md:w-auto md:px-12 py-4 text-lg shadow-lg relative overflow-hidden group"
          disabled={isPredicting || input.rank <= 0}
        >
          {isPredicting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Profile...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Predict Colleges
            </span>
          )}
        </Button>
      </div>
      
    </form>
  );
}
