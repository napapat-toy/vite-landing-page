const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full items-center justify-evenly gap-8 md:gap-20 px-16 py-8 bg-[#FAF2D3]" id="computer">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-4xl font-semibold">What is computer ?</h1>
        <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eligendi, repudiandae voluptatibus ipsum blanditiis officia?</p>
      </div>
      <img
        src="image/Computer-1.jpg"
        alt="computer"
        width={560}
        height={560}
        className="flex flex-1 object-contain"
      />
    </section>
  );
};

export default Hero;
