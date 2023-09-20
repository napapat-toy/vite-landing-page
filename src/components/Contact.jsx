const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for contact us')
    }

    return (
        <div className="flex flex-col items-center bg-[#FAF2D3] py-4">
            <h1 className="text-4xl font-semibold py-4">Contact Us</h1>
            <div className="max-w-[560px] w-full flex flex-col md:flex-row items-center gap-4 my-16 px-4">
                <p className="text-gray-700 font-semibold text-xl">Email:</p>
                <input required type="email" name="contact" id="contact" placeholder="example@email.com" className="w-full outline-none rounded-lg p-4 text-xl font-semibold" />
                <button type="button" onClick={handleSubmit} className="flex justify-center w-full md:w-fit outline-none bg-slate-400 text-2xl hover:bg-slate-500 rounded-md hover:text-white p-4">Send</button>
            </div>
        </div>
    )
}

export default Contact