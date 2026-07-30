import React from 'react';

interface PortableTextProps {
  value: any;
}

export function PortableTextRenderer({ value }: PortableTextProps) {
  if (!value) return null;

  // If plain string text (e.g. from local data or text field)
  if (typeof value === 'string') {
    return (
      <div className="flex flex-col gap-4 text-brand-text-secondary text-sm md:text-base leading-relaxed font-sans">
        {value.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  // If Portable Text blocks array from Sanity Studio
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col gap-4 text-brand-text-secondary text-sm md:text-base leading-relaxed font-sans">
        {value.map((block, idx) => {
          if (block._type !== 'block') return null;

          const style = block.style || 'normal';
          const children = block.children || [];

          const renderChildren = () =>
            children.map((child: any, cIdx: number) => {
              let textNode: React.ReactNode = child.text;

              if (child.marks && Array.isArray(child.marks)) {
                if (child.marks.includes('strong')) {
                  textNode = (
                    <strong key={cIdx} className="font-bold text-white">
                      {textNode}
                    </strong>
                  );
                }
                if (child.marks.includes('em')) {
                  textNode = (
                    <em key={cIdx} className="italic text-brand-cyan">
                      {textNode}
                    </em>
                  );
                }
                if (child.marks.includes('code')) {
                  textNode = (
                    <code
                      key={cIdx}
                      className="px-1.5 py-0.5 rounded bg-brand-bg-card border border-brand-border text-brand-cyan font-mono text-xs"
                    >
                      {textNode}
                    </code>
                  );
                }
                if (child.marks.includes('underline')) {
                  textNode = (
                    <u key={cIdx} className="underline decoration-brand-cyan">
                      {textNode}
                    </u>
                  );
                }
              }

              return <React.Fragment key={cIdx}>{textNode}</React.Fragment>;
            });

          if (style === 'h1') {
            return (
              <h1 key={idx} className="text-2xl md:text-3xl font-black text-white mt-4 font-display">
                {renderChildren()}
              </h1>
            );
          }
          if (style === 'h2') {
            return (
              <h2 key={idx} className="text-xl md:text-2xl font-bold text-white mt-3 font-display">
                {renderChildren()}
              </h2>
            );
          }
          if (style === 'h3') {
            return (
              <h3 key={idx} className="text-lg md:text-xl font-bold text-white mt-2 font-display">
                {renderChildren()}
              </h3>
            );
          }
          if (style === 'blockquote') {
            return (
              <blockquote
                key={idx}
                className="p-4 rounded-r-xl border-l-4 border-brand-cyan bg-brand-bg-card-hover/80 text-brand-text-primary italic my-2"
              >
                {renderChildren()}
              </blockquote>
            );
          }

          if (block.listItem === 'bullet') {
            return (
              <ul key={idx} className="list-disc list-inside space-y-1 text-brand-text-secondary pl-2">
                <li>{renderChildren()}</li>
              </ul>
            );
          }

          if (block.listItem === 'number') {
            return (
              <ol key={idx} className="list-decimal list-inside space-y-1 text-brand-text-secondary pl-2">
                <li>{renderChildren()}</li>
              </ol>
            );
          }

          return <p key={idx}>{renderChildren()}</p>;
        })}
      </div>
    );
  }

  return null;
}
