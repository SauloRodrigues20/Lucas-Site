import React from 'react';

interface CaseData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string[];
  duration: string;
}

interface CaseCardProps {
  caseData: CaseData;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
  return (
    <div className="case-card">
      <div className="case-image">
        <span className="case-emoji">{caseData.image}</span>
      </div>
      <div className="case-content">
        <span className="case-category">{caseData.category}</span>
        <h3>{caseData.title}</h3>
        <p className="case-description">{caseData.description}</p>
        <div className="case-results">
          {caseData.results.map((result, index) => (
            <span key={index} className="result-tag">{result}</span>
          ))}
        </div>
        <div className="case-duration">
          <span>⏱️ {caseData.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;