
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Provides actionable emergency guidance based on the user's situation.
 */
export const getEmergencyGuidance = async (situation: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is in a potential emergency: "${situation}". 
      Provide 3-4 ultra-concise, calm, and life-saving steps. 
      Prioritize immediate safety. 
      Keep the response under 60 words.`,
      config: {
        systemInstruction: "You are SafeSphere AI, a calm and authoritative emergency assistant. Your goal is to keep the user alive and safe by providing clear instructions.",
        temperature: 0.1,
      }
    });
    
    return response.text || "Stay calm. Find a secure location. Contact local authorities immediately.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Please seek a safe location and call emergency services immediately.";
  }
};
