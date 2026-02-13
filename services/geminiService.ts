
import { GoogleGenAI } from "@google/genai";

export const generateRomanticPoem = async (userName: string = "mi dormilona"): Promise<string> => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  if (!apiKey) {
    console.warn("API Key not found");
    return "En cada latido de mi corazón, hay un 'te amo' que viaja por el viento buscando tus oídos, sin importar los kilómetros que nos separen.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Escribe un poema de amor corto y extremadamente romántico para "${userName}". 
      Menciona la distancia, la esperanza de verse pronto y lo especial que es este 14 de febrero. 
      Usa un lenguaje dulce, tierno y elegante. En español.`,
      config: {
        temperature: 0.9,
      }
    });

    return response.text || "Mi amor por ti trasciende el tiempo y el espacio...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "En cada latido de mi corazón, hay un 'te amo' que viaja por el viento buscando tus oídos, sin importar los kilómetros que nos separen.";
  }
};
