export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">김개발</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">소개</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">경력</a>
              <a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">포트폴리오</a>
              <a href="#hobbies" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">취미</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            김
          </div>
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">김개발</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">프론트엔드 개발자</p>
          <p className="text-lg text-gray-500 dark:text-gray-400">사용자 경험을 중시하는 개발자</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            연락하기
          </button>
          <button className="border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            포트폴리오 보기
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">소개</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              안녕하세요! 저는 3년 경력의 프론트엔드 개발자 김개발입니다. 
              사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있으며, 
              React, Next.js, TypeScript 등의 최신 기술을 활용하여 
              직관적이고 반응형인 웹사이트를 만드는 것을 좋아합니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              끊임없는 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">경력</h3>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">시니어 프론트엔드 개발자</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">테크스타트업</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">2022.03 - 현재</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• React, Next.js를 활용한 대시보드 및 관리자 페이지 개발</li>
                <li>• TypeScript 도입으로 코드 품질 향상 및 개발 생산성 증대</li>
                <li>• 팀 내 코드 리뷰 및 신입 개발자 멘토링</li>
                <li>• 웹 성능 최적화로 페이지 로딩 속도 40% 개선</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">주니어 프론트엔드 개발자</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">웹에이전시</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">2021.01 - 2022.02</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• HTML, CSS, JavaScript를 활용한 반응형 웹사이트 개발</li>
                <li>• jQuery 기반 인터랙티브 요소 구현</li>
                <li>• 크로스 브라우저 호환성 테스트 및 최적화</li>
                <li>• 클라이언트 요구사항 분석 및 UI/UX 개선</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">포트폴리오</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                프로젝트 A
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">E-커머스 플랫폼</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                React와 Node.js를 활용한 온라인 쇼핑몰 플랫폼 개발
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                프로젝트 B
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">실시간 채팅 앱</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Socket.io를 활용한 실시간 채팅 웹 애플리케이션
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Redis</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
                프로젝트 C
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">데이터 시각화 대시보드</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                D3.js와 Chart.js를 활용한 인터랙티브 데이터 시각화
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">D3.js</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Chart.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">취미 & 관심사</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl">
                🎮
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">게임 개발</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Unity를 활용한 인디게임 개발에 관심이 많습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                📚
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">독서</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                기술 서적과 소설을 즐겨 읽으며 지식을 쌓고 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                🏃‍♂️
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">러닝</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                주 3회 러닝으로 건강을 관리하고 스트레스를 해소합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                ☕
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">커피</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                다양한 원두와 추출 방법을 탐구하는 커피 애호가입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">연락처</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl mb-2">📧</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">이메일</h4>
              <p className="text-gray-600 dark:text-gray-300">kim.dev@example.com</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📱</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">전화번호</h4>
              <p className="text-gray-600 dark:text-gray-300">010-1234-5678</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌐</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">GitHub</h4>
              <p className="text-gray-600 dark:text-gray-300">github.com/kimdev</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            이메일 보내기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 김개발. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Made with Next.js & Vercel</p>
        </div>
      </footer>
    </div>
  );
}
