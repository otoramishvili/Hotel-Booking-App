
const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-semibold tracking-tight">Booking hotel</span>
        <span className="flex gap-4 text-white font-semibold tracking-tight">
          <p className="cursor-pointer">Privacy policy</p>
          <p className="cursor-pointer">Terms of service</p>
        </span>
      </div>
    </div>
  )
}

export default Footer;