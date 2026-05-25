"use client";

import { useState } from 'react';
import { PredictorInput, PredictorResult, generatePredictions } from '@/utils/predictorLogic';

export function usePredictor() {
  const [input, setInput] = useState<PredictorInput>({
    rank: 0,
    exam: 'JEE Advanced',
    course: 'All Courses',
    state: 'All States'
  });

  const [results, setResults] = useState<PredictorResult[] | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const handleInputChange = (field: keyof PredictorInput, value: string | number) => {
    setInput(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.rank <= 0) {
      alert("Please enter a valid rank greater than 0");
      return;
    }

    setIsPredicting(true);
    
    // Simulate API delay for dramatic effect
    setTimeout(() => {
      const predictions = generatePredictions(input);
      setResults(predictions);
      setIsPredicting(false);
    }, 800);
  };

  const resetPredictor = () => {
    setResults(null);
  };

  return {
    input,
    results,
    isPredicting,
    handleInputChange,
    handlePredict,
    resetPredictor
  };
}
