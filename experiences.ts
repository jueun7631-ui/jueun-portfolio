import type { ExperienceCategory, ExperienceItem } from "@/types/experience";

export const categoryLabels: Record<ExperienceCategory | "all", string> = {
  all: "전체",
  award: "수상 경력",
  internal: "대내 활동",
  external: "대외 활동",
  education: "이수 교육",
  project: "프로젝트",
  etc: "기타"
};

export const experiences: ExperienceItem[] = [
  {
    id: "pt-award-2024",
    category: "award",
    title: "인천대학교 창의인재개발학과 PT대회 대상",
    period: "2024.05",
    summary: "디지털네이티브 역량 평가 모델 및 진단 척도 개발 발표",
    details: ["디지털네이티브 개념을 비판적으로 재정의", "조직 구성원의 디지털네이티브 역량을 측정할 수 있는 평가 모델과 진단 척도 개발"],
    result: "대상"
  },
  {
    id: "startup-award-2024",
    category: "award",
    title: "인천대학교 사회과학대 창업아이디어경진대회 장려상",
    period: "2024.11",
    summary: "사회문제 해결을 목표로 한 창업 아이디어 기획",
    details: ["비즈니스 모델과 사업화 가능성을 제안", "사회문제 해결 관점의 서비스 아이디어 발표"],
    result: "장려상"
  },
  {
    id: "career-up-2025",
    category: "award",
    title: "인천대학교 INU-커리업 성과평가회 우수상",
    period: "2025.02",
    summary: "진로탐색 및 역량개발 활동 분석 발표",
    details: ["대학 생활 중 수행한 진로탐색, 비교과 프로그램, 역량개발 활동을 체계적으로 정리", "활동 성과와 성장 과정을 발표"],
    result: "우수상"
  },
  {
    id: "michuhol-camp-2025",
    category: "award",
    title: "인천대학교 창업지원단 미추홀송상양성캠프 참여 우수상",
    period: "2025.05",
    summary: "창업 아이디어 발굴 및 사업계획 수립",
    details: ["시장분석, 비즈니스 모델 설계, 사업계획 수립 과정을 수행"],
    result: "참여 우수상"
  },
  {
    id: "nsi-2025",
    category: "award",
    title: "NSI 공공인재스쿨 3기 최우수상",
    period: "2025.08",
    summary: "AI 기반 자기주도학습 지원 교육 프로그램 개발 및 운영",
    details: ["교육 취약계층 청소년을 위한 「나만의 공부비서 만들기 with AI」 개발 및 운영", "팀장으로서 프로젝트 총괄, 교육 설계, AI 챗봇 개발, 강의 운영 및 성과 발표 수행"],
    result: "최우수상"
  },
  {
    id: "academic-festival-2025",
    category: "award",
    title: "인천대학교 창의인재개발학과 학술제 대상",
    period: "2025.11",
    summary: "조직 맞춤형 HRD-AI 모델 설계 및 실효성 검증",
    details: ["「조직 맞춤형 HRD-AI 모델: 실무형 챗봇 플랫폼 설계 및 실효성 검증」 주제 발표", "직무분석, 역량모델링, 교육체계 수립을 기반으로 조직 맞춤형 HRD-AI 플랫폼 설계"],
    result: "대상"
  },
  {
    id: "inclusive-ai-agenda-2026",
    category: "award",
    title: "AI·데이터 기반 포용 아젠다 아이디어 공모전 최우수상",
    period: "2026.01.19",
    summary: "교육 취약계층 학습격차 해결을 위한 AI 교육모델 제안",
    details: ["AI 기반 자기주도학습 지원 교육모델 제안", "중학교 현장 적용 경험을 바탕으로 교육 접근성과 학습지원 체계 설계"],
    result: "최우수상"
  },
  {
    id: "kaeim-2026",
    category: "award",
    title: "2026 한국교육정보미디어학회 춘계학술대회 우수논문상",
    period: "2026.05.31",
    summary: "AI 챗봇 설계 및 개발 연구 우수논문상",
    details: ["연구주제: 「중·고등학생의 자기조절학습 지원을 위한 AI 챗봇 설계 및 개발: 메타인지적 모니터링 촉진을 중심으로」", "자기조절학습 이론과 메타인지적 모니터링 개념을 기반으로 AI 챗봇 설계·개발 및 사용성 평가 수행"],
    result: "우수논문상"
  },
  {
    id: "student-council-pr-2024",
    category: "internal",
    title: "창의인재개발학과 학생회 홍보부 부원",
    period: "2024.03~2024.12",
    summary: "학과 홍보 콘텐츠 제작 및 행사 운영 지원",
    details: ["학과 행사 홍보를 위한 포스터, 카드뉴스, 온라인 콘텐츠 제작", "학과 행사 운영 지원"]
  },
  {
    id: "english-newspaper-2024",
    category: "internal",
    title: "인천대학교 영자신문사 홍보·디자인부",
    period: "2024.03~2025.12",
    summary: "영자신문 홍보 콘텐츠 및 디자인 업무 수행",
    details: ["잡지 표지 디자인, 카드뉴스 제작, SNS 채널 운영", "영자신문 홍보 콘텐츠 기획 수행"]
  },
  {
    id: "mentoring-2025",
    category: "internal",
    title: "인천대학교 자유전공학부 생활밀착형 멘토링 멘토",
    period: "2025.09~2025.12",
    summary: "창의인재개발학과 진학 관심 학생 대상 멘토링",
    details: ["대학생활 적응, 학과 이해, 진로 탐색 지원"]
  },
  {
    id: "student-council-planning-2026",
    category: "internal",
    title: "창의인재개발학과 학생회 기획부 부장",
    period: "2026.03~현재",
    summary: "학과 행사 기획 및 학생 참여 프로그램 운영",
    details: ["학과 행사 기획 및 운영 총괄", "학생 참여 프로그램 설계 및 운영"],
    role: "기획부 부장"
  },
  {
    id: "major-fair-2026",
    category: "internal",
    title: "창의인재개발학과 전공박람회 부스 기획 및 운영",
    period: "2026.03.25",
    summary: "전공 홍보 부스 기획 및 운영 총괄",
    details: ["학과 홍보 전략 수립", "체험형 콘텐츠 기획", "부스 운영 총괄"]
  },
  {
    id: "social-science-ai-2026",
    category: "internal",
    title: "Social Science Meets AI 선발",
    period: "2026.05~2026.11",
    summary: "AI 기술을 사회과학 문제 해결에 적용하는 융합 프로그램 참여",
    details: ["AI 기술을 사회과학 분야 문제 해결에 적용하는 융합 프로젝트 및 교육 프로그램 참여"]
  },
  {
    id: "japan-exchange-2025",
    category: "external",
    title: "문화언어교류프로그램(일본)",
    period: "2025.03~2025.06",
    summary: "일본인 교환학생과 언어·문화 교류 수행",
    details: ["글로벌 커뮤니케이션 역량 함양"]
  },
  {
    id: "public-talent-school-2025",
    category: "external",
    title: "공공인재스쿨 3기 팀장",
    period: "2025.06~2025.08",
    summary: "AI 기반 자기주도학습 지원 프로그램 개발 프로젝트 총괄",
    details: ["교육 취약계층 청소년 대상 프로그램 개발", "교육 설계, AI 챗봇 개발, 교육 운영, 성과 발표 수행"],
    role: "팀장"
  },
  {
    id: "startup-300-2025",
    category: "external",
    title: "학생창업유망팀300+",
    period: "2025.07~2025.12",
    summary: "외국인 유학생 정착 지원 서비스 「헬로메이트」 개발",
    details: ["서비스 기획, UI/UX 설계, 기능 정의 및 디자인 업무 담당"]
  },
  {
    id: "startup-club-2025",
    category: "internal",
    title: "교내 창업동아리 활동",
    period: "2025.09~2025.12",
    summary: "「헬로메이트」 기능 고도화 및 사업화 검토",
    details: ["유학생 지원 서비스의 기능 고도화와 사업화 가능성 검토"]
  },
  {
    id: "huss-credit-2025",
    category: "external",
    title: "HUSS Credi-T 탐구커뮤니티 팀장",
    period: "2025.10~2026.01",
    summary: "AI 기반 자기주도학습 지원 모델 현장 적용 프로젝트",
    details: ["중학교 교육 현장 적용 및 효과 탐색", "프로젝트 운영, 학교 협의, 현장 적용 및 결과 분석 담당"],
    role: "팀장"
  },
  {
    id: "huss-japan-2026",
    category: "external",
    title: "HUSS 선상인문학 일본 해외탐방",
    period: "2026.01",
    summary: "일본 사회의 포용 가치와 사회문제 탐구",
    details: ["타대학 학생들과 공동 프로젝트 수행"]
  },
  {
    id: "modu-idea-2026",
    category: "external",
    title: "모두의 아이디어 우수참여자 선정",
    period: "2026.04",
    summary: "진로 크래프팅 플랫폼 제안",
    details: ["상위 1만 건 아이디어 선정", "「현대인의 자아실현을 위한 진로 크래프팅 플랫폼」 서비스 구조 및 활용 방안 설계"],
    result: "우수참여자 선정"
  },
  {
    id: "social-science-research-2026",
    category: "internal",
    title: "인천대학교 사회과학연구원 학생연구단",
    period: "2026.04~현재",
    summary: "AI와 학습, 교육혁신 관련 연구 프로젝트 수행",
    details: ["교육 및 사회과학 분야의 AI 활용 방안 탐색"]
  },
  {
    id: "hrd-education-conferences",
    category: "education",
    title: "HRD 및 교육 학회 참관",
    period: "2024~2026",
    summary: "HRD, 기업교육, 교육공학, 교육정보미디어, 인력개발 관련 학술대회 참관 및 참가",
    detailTitle: "교육 이수 내역",
    details: [
      "2024 한국기업교육학회 추계학술대회 참관",
      "2025 한국기업교육학회 추계학술대회 참관",
      "2025 한국교육공학회·한국교육정보미디어학회 추계공동학술대회 참관",
      "2025 한국인력개발학회 추계학술대회 참관",
      "2026 한국농산업교육학회 춘계학술대회 참관 (2026.05.22)",
      "2026 한국교육정보미디어학회 춘계학술대회 참가 (2026.05.30)",
      "2026 한국인력개발학회 춘계학술대회 참관 (2026.05.30)"
    ]
  },
  {
    id: "job-related-training",
    category: "education",
    title: "직무 관련 교육 이수",
    period: "2024~2026",
    summary: "HR, HRD, 콘텐츠, 미디어, 디자인, 마케팅 직무 관련 교육 및 멘토링 이수",
    detailTitle: "교육 이수 내역",
    details: [
      "[POSCO 포스코인재창조원 기업탐방] 「취업으로 Cheer Up」 프로그램 (2024) - 포스코 기업 이해 및 인재개발팀 직무 탐색, 기업 현장 및 직무 정보 습득",
      "2024년 방송미디어 인재양성 프로젝트 「대한민국 PD를 만나다」 (2024) - 방송 콘텐츠 산업 및 PD 직무 이해 프로그램 참여",
      "직장인 필수스킬 교육_Adobe Tutorial [Photoshop 카드뉴스 및 명함 제작] (2024) - Photoshop 기초 활용 및 시각 콘텐츠 제작 교육 수강",
      "INU Pre-엘리트 프로그램 「현직자가 알려주는 디지털·콘텐츠 마케팅 직무 파악하기」 (2025.04) - 디지털 마케팅 및 콘텐츠 산업 직무 이해 교육 참여",
      "직무: 카메라 촬영(견우와 센터 촬영감독) 산업 및 직무이해 세미나 (2025.11.17) - 영상 촬영 및 콘텐츠 제작 직무 관련 특강 수강",
      "[26 상반기 현직멘토 직무부트캠프] 콘텐츠 기획·제작 직무 (2026.03.20) - 전 CJ ENM, PLAYLIST, HYBE 콘텐츠 실무자 특강 및 콘텐츠 기획·제작 실무 프로세스 교육 수강",
      "[25 상반기 현직멘토와 함께하는 직무부트캠프] HR(인사) 직무 (2025.03.18) - 전 코오롱그룹 인사팀 현직자 특강, HR 직무 전반과 채용·인사관리·조직문화·커리어 관련 교육 수강",
      "INU 직무 멘토링 프로그램 (HRD 김재환 멘토) (2025) - HRD 현직자 멘토링 3차시 참여, HRD 직무 이해 및 진로 설계 관련 멘토링 진행",
      "HR인사 산업 및 직무이해 세미나 (2025.11.12) - HR 직무의 역할, 산업 동향 및 실무 이해 교육 수강"
    ]
  },
  {
    id: "major-coursework-a-plus",
    category: "education",
    title: "교과목 이수(전공 관련)",
    period: "2024~2025",
    summary: "",
    detailTitle: "교육 이수 내역",
    note: "아래의 수강 과목은 모두 A+ 성적을 취득하였습니다.",
    details: [
      "25년도 2학기: 역량모델링과 교육체계수립 (전공), 미디어입문 (복수전공), 미디어산업의이해 (복수전공), 정치브랜딩전략 (복수전공), 평생교육프로그램개발론",
      "25년도 1학기: 교수설계론 (전공), 직업교육과 HRD (전공), PR케이스스터디 (복수전공), 브랜디드콘텐츠캡스톤디자인 (복수전공), 영상과디자인",
      "24년도 2학기: 창의성의이해 (전공), 테크놀로지와 HRD (전공), 기업경영과 HRD (전공), 직업세계와노동시장 (전공)",
      "24년도 1학기: 인적자원개발론 (전공), 원격교육론 (전공), 상담심리학 (전공)"
    ]
  },
  {
    id: "study-secretary-ai",
    category: "project",
    title: "나만의 공부비서 만들기 with AI",
    period: "2025",
    summary: "교육 취약계층 청소년 대상 AI 기반 자기주도학습 지원 교육 프로그램",
    details: ["주제: 교육 취약계층 청소년 대상 AI 기반 자기주도학습 지원 교육 프로그램 개발", "역할: 팀장", "담당 업무: 프로젝트 총괄, 교육 설계, 강의 운영, 성과 발표", "인천 소재 총 4곳의 학교를 방문해 누적 약 80명의 학생에게 교육 시행"],
    result: "공공인재스쿨 3기 최우수상, CEO 포럼 발표, AI·데이터 기반 포용 아젠다 아이디어 공모전 최우수상",
    role: "팀장"
  },
  {
    id: "hrd-ai-model",
    category: "project",
    title: "조직 맞춤형 HRD-AI 모델 개발 프로젝트",
    period: "2025",
    summary: "조직 맞춤형 교육훈련 체계 구축을 위한 HRD-AI 솔루션",
    details: ["역할: 프로젝트 총괄 및 발표자", "담당 업무: 직무분석, 역량모델링, 교육체계 설계, AI 챗봇 개발", "중소기업 및 스타트업을 대상으로 조직 데이터 기반 맞춤형 HR서비스를 지원하는 AI 챗봇 설계 및 개발"],
    result: "창의인재개발학과 학술제 대상",
    role: "프로젝트 총괄 및 발표자"
  },
  {
    id: "hellomate",
    category: "project",
    title: "헬로메이트 서비스 개발 프로젝트",
    period: "2025",
    summary: "외국인 유학생 정착 지원 서비스",
    details: ["역할: 서비스 기획 및 디자인 담당", "담당 업무: 서비스 기획, UI/UX 설계, 아이콘 제작, 기능 명세화", "생활정보, 학교 적응, 행정지원 정보를 통합 제공하는 유학생 지원 플랫폼 개발"],
    result: "창업 유망주 300+ 선정, 교내 창업 동아리 선발",
    role: "서비스 기획 및 디자인"
  },
  {
    id: "career-crafting",
    category: "project",
    title: "진로 크래프팅 플랫폼 기획 프로젝트",
    period: "2026~현재",
    summary: "현대인의 자아실현을 지원하는 맞춤형 진로설계 플랫폼",
    details: ["개인의 경험, 가치관, 역량을 분석해 맞춤형 진로 탐색과 경력설계를 AI 및 게이미피케이션 기반으로 지원하는 플랫폼 기획"],
    result: "모두의 아이디어 우수참여자 선정"
  },
  {
    id: "academic-conferences",
    category: "etc",
    title: "HRD 및 교육 관련 학회 참관 다수",
    period: "2024~현재",
    summary: "HRD, 교육공학, 교육정보미디어, AI 분야 학술대회 참관",
    details: ["HRD, 교육공학, 교육정보미디어, AI 분야 학술대회 참관"]
  },
  {
    id: "hr-job-lectures",
    category: "etc",
    title: "교내 HR관련 직무특강 지속 참여",
    period: "2024~현재",
    summary: "진로 탐색 및 직무역량 강화를 위한 비교과 활동",
    details: ["진로 탐색 및 직무역량 강화를 위한 비교과 활동 다수 참여"]
  }
];
