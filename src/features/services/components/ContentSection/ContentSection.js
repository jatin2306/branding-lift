import React from 'react';
import SectionHeading from '../../../../shared/ui/SectionHeading';
import './ContentSection.css';

function ContentSection({
  id,
  title,
  subtitle,
  children,
  className = '',
  headingAlign = 'center',
}) {
  return (
    <section id={id} className={`content-section ${className}`.trim()}>
      <div className="content-section__inner">
        {(title || subtitle) && (
          <SectionHeading title={title} subtitle={subtitle} align={headingAlign} />
        )}
        {children}
      </div>
    </section>
  );
}

export default ContentSection;
