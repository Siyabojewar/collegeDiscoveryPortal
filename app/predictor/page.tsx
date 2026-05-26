"use client";

import React from 'react';
import { usePredictor } from '@/hooks/usePredictor';
import { PredictorForm } from '@/components/predictor/PredictorForm';
import { PredictorResults } from '@/components/predictor/PredictorResults';
import { Button } from '@/components/ui/Button';

export default function PredictorPage() {
  const { input, results, isPredicting, handleInputChange, handlePredict, resetPredictor } = usePredictor();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-32">
      <div className="container mx-auto px-4">
        
        {!results ? (
          <div className="relative bg-[url('/assets/predictor-bg.png')] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
            <div className="relative z-10 p-6 md:p-16">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">AI College Predictor</h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">Enter your ranks and let our AI engine predict your best college options instantly.</p>
              </div>
              <PredictorForm 
                input={input}
                isPredicting={isPredicting}
                onInputChange={handleInputChange}
                onSubmit={handlePredict}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your College Predictions</h1>
                <p className="text-gray-500">
                  Based on Rank: <span className="font-bold text-gray-900">{input.rank}</span> in <span className="font-bold text-gray-900">{input.exam}</span>
                </p>
              </div>
              
              <Button variant="outline" onClick={resetPredictor}>
                Modify Inputs
              </Button>
            </div>

            <PredictorResults results={results} />
          </div>
        )}

      </div>
    </div>
  );
}
