interface ContentTextProps {
  title?: string;
  content?: string;
  titleTextSize?: number;
  contentTextSize?: number;
}

export function AboutMe() {
  const Style = "w-[80%] flex flex-col items-center m-auto border-b py-[80px]";
  const content_Style = "flex flex-col gap-[25px] w-[800px] pt-[25px]";

  return (
    <div className={Style}>
      <h2 className="text-[60px] font-bold">About Me</h2>

      <div className={content_Style}>
        <ContentBox>
          <ContentText
            title="프론트엔드를 시작하게된 이유는?"
            content={`처음에는 단순한 정보 전달용 웹페이지를 제작했지만, 스타일 관리의 비효율성을 느끼며 CSS를 배우게 되었습니다.
                      이후 사용자와 상호작용하는 웹을 만들고 싶어 JavaScript를 익혔고, 더 효율적인 개발을 위해 React와 Next.js를
                      접하며 프론트엔드 개발자의 길을 걷게 되었습니다.`}
          />
        </ContentBox>

        <ContentBox>
          <ContentText
            title="목표는?"
            content={`사용자가 원하는 기능을 모두 구현하는 것, 최적화가 잘 된 웹페이지를 만드는 것이 목표입니다.`}
          />
        </ContentBox>

        <ContentBox>
          <ContentText title="Contact" />

          <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
            <ContentText title="이름" content="김태경" titleTextSize={20} />
            <ContentText title="이메일" content="rlaxorud8532@gmail.com" titleTextSize={20} />
            <ContentText title="주소" content="경기도 오산시" titleTextSize={20} />
            <ContentText title="대학교" content="평택대학교 융합소프트웨어 학과 졸업" titleTextSize={20} />
          </div>
        </ContentBox>
      </div>
    </div>
  );
}

function ContentBox({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#11182780] p-5 rounded-3xl">{children}</div>;
}

function ContentText({ title, content, titleTextSize, contentTextSize }: ContentTextProps) {
  return (
    <div className="flex flex-col gap-[10px] text-center">
      <span className={`font-bold ${titleTextSize ? `text-[${titleTextSize}px]` : "text-[25px]"}`}>{title}</span>
      <p
        className={`whitespace-pre-line text-[#9ca3af] ${
          contentTextSize ? `text-[${contentTextSize}px]` : "text-[16px]"
        }`}
      >
        {content}
      </p>
    </div>
  );
}
