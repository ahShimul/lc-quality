interface Props {
  num?: string;
  eyebrow?: string;
  title: string;
  titleEm?: string;
  description?: string;
}

export function SectionHead({ num, eyebrow, title, titleEm, description }: Props) {
  return (
    <div className="flex flex-col min-[780px]:flex-row min-[780px]:items-end min-[780px]:justify-between gap-6 mb-14">
      <div className="max-w-[620px]">
        {(num || eyebrow) && (
          <div className="sec-num">
            {num && <>{num}</>}
            {num && eyebrow && <span className="text-line">/</span>}
            {eyebrow && <>{eyebrow}</>}
          </div>
        )}
        <h2 className="h-section text-ink">
          {title}
          {titleEm && (
            <>
              {" "}<em>{titleEm}</em>
            </>
          )}
        </h2>
      </div>
      {description && (
        <p className="text-[15px] text-muted leading-[1.7] max-w-[380px]">
          {description}
        </p>
      )}
    </div>
  );
}
