import React from 'react';

interface ProjectThumbnailProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} />
          {/* NAPISAC CALY KOMPONENT PLUS LAYOUT DLA NOWEJ STRONY Z
          POKAZANYM PROJEKTEM NA ZYWO.  */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ProjectThumbnail;