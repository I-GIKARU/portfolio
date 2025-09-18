import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { resumeData } from '../../../data/resume';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash-lite',
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 512,
      }
    });

    // Create comprehensive context from resume data
    const context = `
You are Isaac Gikaru's AI assistant. Answer questions about Isaac based on this resume information:

PERSONAL INFO:
Name: ${resumeData.personalInfo.name}
Email: ${resumeData.personalInfo.email}
Phone: ${resumeData.personalInfo.phone}
GitHub: ${resumeData.personalInfo.github}
Location: ${resumeData.personalInfo.location}

EDUCATION:
${resumeData.education.institution} - ${resumeData.education.program}
${resumeData.education.description}

SUMMARY:
${resumeData.summary}

TECHNICAL SKILLS:
${Object.entries(resumeData.skills).map(([category, skills]) => 
  `${category}: ${skills.join(', ')}`
).join('\n')}

PROJECTS:
${resumeData.projects.map((project, index) => 
  `${index + 1}. ${project.title}
  Technologies: ${project.technologies.join(', ')}
  Description: ${project.description}
  ${project.github ? `GitHub: ${project.github}` : ''}`
).join('\n\n')}

ACHIEVEMENTS:
${resumeData.achievements.map(achievement => `• ${achievement}`).join('\n')}

AVAILABILITY:
${resumeData.availability.status}
Interested in: ${resumeData.availability.interests.join(', ')}

Answer as Isaac's helpful AI assistant. Be conversational, professional, and specific. Use the exact information provided above.
`;

    const prompt = `${context}\n\nUser Question: ${question}\n\nAnswer as Isaac's AI assistant:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const answer = response.text();

    return NextResponse.json({ answer });

  } catch (error: any) {
    console.error('Gemini AI error:', error);
    return NextResponse.json({ 
      error: 'AI service temporarily unavailable',
      details: error.message 
    }, { status: 500 });
  }
}
