import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome to the Frontend Quiz!</h1>
        <h2>Pick a subject to get started.</h2>

        {/* Quiz menu start */}
        <div className="options">
          <ul className="option-list">
            <li className="option-itm">HTML</li>
            <li className="option-itm">CSS</li>
            <li className="option-itm">JavaScript</li>
            <li className="option-itm">Accessibility</li>
          </ul>
        </div>
        {/* Quiz menu end */}
      </div>

      {/* Quiz question start */}
      <div className="quiz-section">
        <h2>Question <span>number</span> of 10</h2>
        <div className="quiz-options">
        <ul className="option-list-quiz">
          <li className="option-itm-quiz">A</li>
          <li className="option-itm-quiz">B</li>
          <li className="option-itm-quiz">C</li>
          <li className="option-itm-quiz">D</li>
        </ul>
        </div>
        <button>Submit answer</button>
      </div>
      {/* Quiz question end */}
      
      {/* Quiz completed start */}
      <div className="quiz-completed-section">
        <h2>Quiz completed</h2>
        <p>You scored...</p>
        {/* score */}
        <p><span>number</span> out of 10</p>
      </div>
      {/* Quiz completed end */}
    </main>
  );
}
