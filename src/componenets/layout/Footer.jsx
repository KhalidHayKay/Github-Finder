function Footer() {
    const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
        <p className="text-lg">Copyright &copy; {footerYear}. All rights reserved</p>
    </footer>
  )
}

export default Footer