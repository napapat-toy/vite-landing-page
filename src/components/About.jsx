const About = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row-reverse w-full items-center justify-evenly gap-8 md:gap-20 px-16 py-8 bg-[#F4E869]" id="about">
            <div className="flex flex-1 flex-col gap-4">
                <h1 className="text-4xl font-semibold">Why computer ?</h1>
                <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eligendi, repudiandae voluptatibus ipsum blanditiis officia?</p>
            </div>
            <div className="flex flex-1 justify-center w-full">
                <img
                    src="image/Computer-2.svg"
                    alt="computer"
                    width={560}
                    height={560}
                    className="object-contain"
                />
            </div>

        </section>
    );
};

export default About;
