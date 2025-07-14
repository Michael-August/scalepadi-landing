const MissionVision = () => {
    return (
        <div className="flex w-full items-center bg-white py-8 lg:py-20">
            <div className="w-full lg:w-[1070px] bg-[#D1DAEC] lg:px-20 p-3.5 lg:h-[310px] rounded-tr-2xl rounded-br-2xl flex flex-col gap-7 lg:flex-row items-center justify-center">
                <div className="flex w-full flex-col gap-2 lg:gap-3.5">
                    <span className="font-bold text-2xl lg:text-[32px] text-[#1A1A1A]">Mission</span>
                    <span className="text-base font-medium">
                        To increase the number of businesses positively impacting Africa by delivering smart, tailored growth solutions through vetted talent and expert guidance.
                    </span>
                </div>
                <div className="flex w-full flex-col gap-2 lg:gap-3.5">
                    <span className="font-bold text-2xl lg:text-[32px] text-[#1A1A1A]">Vision</span>
                    <span className="text-base font-medium">
                        A thriving African business ecosystem powered by accessible technology, expert collaboration, and measurable growth.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MissionVision;
