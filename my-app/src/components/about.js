import React, { useState } from 'react';
import './About.css'; // You can style this page according to your preferences

const About = () => {
    const [activeSection, setActiveSection] = useState('mission'); // Default section

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'mission':
                return (
                    <>
                    
                      















                 
<div class="row mt-5">
    <div class="col-md-6 mb-3">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://th.bing.com/th/id/OIP.EvD7oTKOgYMzaY7WKrtDpgHaDp?w=319&h=172&c=7&r=0&o=5&pid=1.7" class="img-fluid rounded-start" alt="Truth Card"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Truth in Journalism</h5>
                        <p class="card-text">Our commitment is to deliver the truth, free from bias, ensuring the public gets factual and accurate information.</p>
                        
                        <p class="card-text"><small class="text-muted">Updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-3">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://th.bing.com/th/id/OIP.ctjQY3zV8LnlfBoevUT9FgHaDt?w=350&h=175&c=7&r=0&o=5&pid=1.7" class="img-fluid rounded-start" alt="Stay Informed Card"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Stay Informed</h5>
                        <p class="card-text">We provide news that keeps you informed on the latest developments from around the world, every moment of the day.</p>
                        <p class="card-text"><small class="text-muted">Updated 5 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-3">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://th.bing.com/th/id/OIP.gGiFDpfSBB9A8XzvCZ3pPwHaED?w=325&h=180&c=7&r=0&o=5&pid=1.7" class="img-fluid rounded-start" alt="Community Focus Card"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Community Focus</h5>
                        <p class="card-text">Our news stories are centered around communities, focusing on the issues and people that shape society at a grassroots level.</p>
                        <p class="card-text"><small class="text-muted">Updated 10 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-3">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://th.bing.com/th/id/OIP.SZ5zzBYlIWtRhM0pXPqFbwHaE7?w=255&h=180&c=7&r=0&o=5&pid=1.7" class="img-fluid rounded-start" alt="Global Reach Card"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Global Reach</h5>
                        <p class="card-text">Our news network has a global reach, ensuring that you stay updated on the most important events, no matter where they happen.</p>
                        <p class="card-text"><small class="text-muted">Updated 15 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>















                    
                    
                    
                    
                    </>
                );
            case 'vision':
                return (
                  
                    <>
                       


                        







                       <div>
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">
                    A Commitment to Integrity<span className="text-muted"></span>
                    </h2>
                    <p className="lead">In recent years, the media landscape has been marked by the proliferation of misinformation and sensationalism. This has led to a growing distrust among the public regarding news sources. At [Your App Name], we are committed to reversing this trend by prioritizing journalistic integrity above all else. Our team of dedicated journalists and fact-checkers work tirelessly to ensure that every piece of news we publish is thoroughly researched, verified, and presented with objectivity. We strive to offer a diverse range of perspectives on current events, fostering a more nuanced understanding of the world around us.
                                            </p>
                </div>
                <div className="col-md-5">
                <div>
    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSsb1K6-BZmQ6qQDKVV-WeTXnnn-xUcRVFKrtexp2kiz7pYebezYyM6fYODO7loM6q0s&usqp=CAU" 
        alt="Fostering Community Engagement" 
        className="icon" 
        width="1920" 
        height="1280" 
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
    />
</div>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">
                    Embracing Innovation and Technology <span className="text-muted"></span>
                    </h2>
                    <p className="lead">n an ever-evolving digital landscape, staying ahead of the curve is crucial. Our vision is to continuously innovate and adopt new technologies that enhance the user experience and streamline our operations. From advanced algorithms that personalize content to user-friendly interfaces that facilitate easy navigation, we are committed to leveraging technology to improve our services.

We are also exploring opportunities in artificial intelligence and machine learning to enhance our news delivery. By employing these technologies, we aim to improve content recommendation systems, enabling users to discover news stories that align with their interests. Our ultimate goal is to create a seamless and intuitive experience that keeps users engaged and informed.</p>
                </div>
                <div className="col-md-5 order-md-1">
                <div>
    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mRkMhCu-pfQ1QjfDbb9oJ3cCLtGDJZXjPw&s" 
        alt="Fostering Community Engagement" 
        className="icon" 
        width="1920" 
        height="1280" 
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
    />
</div>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">
                    Fostering Community Engagement <span className="text-muted"></span>
                    </h2>
                    <p className="lead">In addition to delivering news, we recognize the importance of community engagement. We envision our platform as a space where users can come together to share their thoughts, opinions, and experiences related to the news. By fostering a sense of community, we aim to bridge divides and promote understanding among individuals from different backgrounds and perspectives.

Our interactive features—such as comment sections, forums, and polls—encourage users to participate actively in discussions about current events. We believe that meaningful conversations around news stories can lead to greater awareness and understanding of complex issues. Through user-generated content and dialogue, we seek to create an inclusive environment where every voice is heard, and diverse perspectives are valued.

Moreover, we encourage our users to contribute their own stories and experiences. By allowing individuals to share their narratives, we hope to highlight the human aspect of news reporting and bring attention to underrepresented voices. We understand that every story has the potential to spark change, and we want our platform to be a conduit for these vital narratives.</p>
                </div>
                <div className="col-md-5">
               
                <div>
                <div>
    <img 
        src="https://www.newsreports.com/wp-content/uploads/2024/03/3-Tips-for-Fostering-More-Community-Engagement.jpg" 
        alt="Fostering Community Engagement" 
        className="icon" 
        width="1920" 
        height="1280" 
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
    />
</div>

</div>

               
                </div>
            </div>

            <hr className="featurette-divider" />
        </div>































                  
                     </>
                );
            case 'latest':
                return (
                    <div>
                        <h2>Latest Updates</h2>
                        <p>Stay updated with the latest news and updates from [Your News App]. We’ve recently launched new features like personalized news feeds, AI-driven recommendations, and an enhanced user experience.</p>
                    </div>
                );
            case 'achievements':
                return (
                    <div>
                        <h2>Our Achievements</h2>
                        <ul>
                            <li>Ranked among the top 5 news apps globally in 2023.</li>
                            <li>Over 10 million downloads on app stores.</li>
                            <li>Recipient of the 2024 Global Media Innovation Award.</li>
                        </ul>
                    </div>
                );
            case 'awards':
                return (
                    <div>
                        <h2>Our Awards</h2>
                        <p>We’ve been recognized globally for our contribution to the news industry.</p>
                        <ul>
                            <li>Best News App Award, 2022</li>
                            <li>Innovation in Journalism Award, 2023</li>
                            <li>Global Media Excellence Award, 2024</li>
                        </ul>
                    </div>
                );
            default:
                return (
                    <div>
                        <h2>Welcome to Our About Page</h2>
                        <p>Select a section to learn more about us.</p>
                    </div>
                );
        }
    };

    return (
        <div className="about-page">
            {/* Navbar with Dropdown/Links */}
            <nav className="about-navbar">
                <ul>
                    <li onClick={() => setActiveSection('mission')}>Our Mission</li>
                    <li onClick={() => setActiveSection('vision')}>Our Vision</li>
                    <li onClick={() => setActiveSection('latest')}>Latest Updates</li>
                    <li onClick={() => setActiveSection('achievements')}>Achievements</li>
                    <li onClick={() => setActiveSection('awards')}>Awards</li>
                </ul>
            </nav>

            {/* Content section */}
            <div className="about-content">
                {renderSectionContent()}
            </div>
        </div>
    );
};

export default About;
