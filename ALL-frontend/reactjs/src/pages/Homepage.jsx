import '../pages/homepage.css';
import TextType from "../reactbits/TextType/TextType.jsx";

const Homepage = () => {
    return (
        <>
            <div className='hero'>
                <div className='left-hero'>
                    <TextType
                        as="h1"
                        text={[
                            "🚀 Welcome to the Future of Tech at MSP!",
                            "💡 Students don't just use tech they SHAPE it.",
                            "🛠️ Build • 🎟️ Events • 📚 Learn • 🤝 Collaborate",
                            "🌐 Explore projects, events & resources!",
                            "🔥 We're not waiting for the future we're coding it.",
                            "👩‍💻 Join. ⚙️ Create. 🚀 Launch."
                        ]}
                        typingSpeed={55}
                        deletingSpeed={35}
                        pauseDuration={1700}
                        textColors={["#5aa2ff", "#7b5dff", "#ffb347", "#5cffd7", "#ff6b6b", "#9d7bff"]}
                        variableSpeed={{ min: 38, max: 78 }}
                        hideCursorWhileTyping={false}
                        cursorCharacter="|"
                    />

                    <div className='introduction'>
                        <div className='intro-card'>
                          <p>
                            At the MSP Tech Club, we believe every student deserves the chance to grow, create, and shape the future through technology. We're more than a club—
                            we're a launchpad for aspiring developers, designers, and tech leaders.
                            <br /><br />We host regular tech sessions that open doors to diverse fields from web development and AI to cybersecurity and app design—helping students explore, discover their passions, and build real skills.
                            <br /><br />Through hands-on workshops, coding bootcamps, and hackathons, we create dynamic spaces where ideas turn into projects, and beginners become builders. Whether you're writing your first line of code or leading a team at a hackathon, we're here to support your journey.
                          </p>
                        </div>
                    </div>
                </div>
                                <div className='right-hero'>
                                        <div className='model-wrapper'>
                                            <model-viewer
                                                src="/assets/MSP_3D.glb"
                                                alt="MSP 3D Logo"
                                                camera-controls
                                                auto-rotate
                                                rotation-per-second="25deg"
                                                exposure="1"
                                                shadow-intensity="1"
                                                disable-zoom
                                                interaction-prompt="none"
                                                loading="lazy"
                                                style={{ width: '100%', height: '100%', '--poster-color': 'transparent', background: 'transparent' }}
                                            ></model-viewer>
                                        </div>
                                </div>

            </div>
        </>
    )
}

export default Homepage