
const Footer = () => {
  return (
    <footer className="flex justify-center space-x-4 border-t border-yellow-400/[0.15] bg-white/25 py-4 text-center text-sm font-medium uppercase dark:bg-black/25 dark:text-white">
      made by<span className="ml-1 text-purple-500">panoptisdev</span>
      <div className="flex justify-center space-x-3">
          <a href="https://www.linkedin.com" target='_blank'><img className='w-5 transition hover:scale-125 dark:invert' src="/static/images/linkedin-logo.png" alt="linkedin" /></a>
          <a href="https://github.com/" target='_blank'><img className='w-5 transition hover:scale-125 dark:invert' src="/static/images/github-logo.png" alt="github" /></a>
      </div>
    </footer>
  )
}

export default Footer