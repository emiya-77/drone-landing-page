import Button from "./Button"

const About = () => {
    return (
        <div className="mb-40">
            <div className="flex justify-center items-center gap-80">
                <div className="flex-1 flex justify-end">
                    <div>
                        <h3 className="font-medium uppercase text-5xl mb-6">About Us</h3>
                        <p className="text-gray-500 w-[450px] mb-2">Visual artists use drones to capture beautiful new images and camera angles.</p>
                        <p className="text-gray-500 w-[450px] mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ut iusto natus. Corrupti, esse? Voluptates eos, expedita vitae dolores accusantium corporis culpa excepturi eum rem libero. Eos dolores vel dolore.</p>
                        <Button text="Read More"></Button>
                    </div>
                </div>
                <div className="flex-1 h-[600px] my-8">
                    <img className="w-3/7 h-full object-cover" src="/drone2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;