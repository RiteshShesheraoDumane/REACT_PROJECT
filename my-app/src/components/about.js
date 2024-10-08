import React, { useState } from "react";
import "./About.css"; // You can style this page according to your preferences

const About = () => {
  const [activeSection, setActiveSection] = useState("mission"); // Default section

  const renderSectionContent = () => {
    switch (activeSection) {
      case "mission":
        return (
          <>
            <div class="row mt-5">
              <div class="col-md-6 mb-3">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.EvD7oTKOgYMzaY7WKrtDpgHaDp?w=319&h=172&c=7&r=0&o=5&pid=1.7"
                        class="img-fluid rounded-start"
                        alt="Truth Card"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Truth in Journalism</h5>
                        <p class="card-text">
                          Our commitment is to deliver the truth, free from
                          bias, ensuring the public gets factual and accurate
                          information.
                        </p>

                        <p class="card-text">
                          <small class="text-muted">Updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.ctjQY3zV8LnlfBoevUT9FgHaDt?w=350&h=175&c=7&r=0&o=5&pid=1.7"
                        class="img-fluid rounded-start"
                        alt="Stay Informed Card"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Stay Informed</h5>
                        <p class="card-text">
                          We provide news that keeps you informed on the latest
                          developments from around the world, every moment of
                          the day.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Updated 5 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.gGiFDpfSBB9A8XzvCZ3pPwHaED?w=325&h=180&c=7&r=0&o=5&pid=1.7"
                        class="img-fluid rounded-start"
                        alt="Community Focus Card"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Community Focus</h5>
                        <p class="card-text">
                          Our news stories are centered around communities,
                          focusing on the issues and people that shape society
                          at a grassroots level.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Updated 10 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.SZ5zzBYlIWtRhM0pXPqFbwHaE7?w=255&h=180&c=7&r=0&o=5&pid=1.7"
                        class="img-fluid rounded-start"
                        alt="Global Reach Card"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Global Reach</h5>
                        <p class="card-text">
                          Our news network has a global reach, ensuring that you
                          stay updated on the most important events, no matter
                          where they happen.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">Updated 15 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "vision":
        return (
          <>
            <div>
              <hr className="featurette-divider" />

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">
                    A Commitment to Integrity
                    <span className="text-muted"></span>
                  </h2>
                  <p className="lead">
                    In recent years, the media landscape has been marked by the
                    proliferation of misinformation and sensationalism. This has
                    led to a growing distrust among the public regarding news
                    sources. At [Your App Name], we are committed to reversing
                    this trend by prioritizing journalistic integrity above all
                    else. Our team of dedicated journalists and fact-checkers
                    work tirelessly to ensure that every piece of news we
                    publish is thoroughly researched, verified, and presented
                    with objectivity. We strive to offer a diverse range of
                    perspectives on current events, fostering a more nuanced
                    understanding of the world around us.
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
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>

              <hr className="featurette-divider" />

              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">
                    Embracing Innovation and Technology{" "}
                    <span className="text-muted"></span>
                  </h2>
                  <p className="lead">
                    n an ever-evolving digital landscape, staying ahead of the
                    curve is crucial. Our vision is to continuously innovate and
                    adopt new technologies that enhance the user experience and
                    streamline our operations. From advanced algorithms that
                    personalize content to user-friendly interfaces that
                    facilitate easy navigation, we are committed to leveraging
                    technology to improve our services. We are also exploring
                    opportunities in artificial intelligence and machine
                    learning to enhance our news delivery. By employing these
                    technologies, we aim to improve content recommendation
                    systems, enabling users to discover news stories that align
                    with their interests. Our ultimate goal is to create a
                    seamless and intuitive experience that keeps users engaged
                    and informed.
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mRkMhCu-pfQ1QjfDbb9oJ3cCLtGDJZXjPw&s"
                      alt="Fostering Community Engagement"
                      className="icon"
                      width="1920"
                      height="1280"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>

              <hr className="featurette-divider" />

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">
                    Fostering Community Engagement{" "}
                    <span className="text-muted"></span>
                  </h2>
                  <p className="lead">
                    In addition to delivering news, we recognize the importance
                    of community engagement. We envision our platform as a space
                    where users can come together to share their thoughts,
                    opinions, and experiences related to the news. By fostering
                    a sense of community, we aim to bridge divides and promote
                    understanding among individuals from different backgrounds
                    and perspectives. Our interactive features—such as comment
                    sections, forums, and polls—encourage users to participate
                    actively in discussions about current events. We believe
                    that meaningful conversations around news stories can lead
                    to greater awareness and understanding of complex issues.
                    Through user-generated content and dialogue, we seek to
                    create an inclusive environment where every voice is heard,
                    and diverse perspectives are valued. Moreover, we encourage
                    our users to contribute their own stories and experiences.
                    By allowing individuals to share their narratives, we hope
                    to highlight the human aspect of news reporting and bring
                    attention to underrepresented voices. We understand that
                    every story has the potential to spark change, and we want
                    our platform to be a conduit for these vital narratives.
                  </p>
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
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="featurette-divider" />
            </div>
          </>
        );
      case "ourteam":
        return (
          <>
          <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        About Us
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZxgQGAYIZq3aJZpG2vMGJAWH865aMQAXoBqbBVQoup-VnvCGsClat5xYP3dgT-NyByM&usqp=CAU" className="card-img-top" alt="Manager" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Georgia, serif' }}>Manager</h5>
              <p className="card-text" style={{ fontFamily: 'Verdana, sans-serif' }}>
                Our manager oversees daily operations and ensures the highest quality of journalism and reporting. With years of experience in media management, they lead our team towards excellence.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <img src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Elon-Musk-entrepreneur-and-businessman.jpg" className="card-img-top" alt="Chairman" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Georgia, serif' }}>Chairman</h5>
              <p className="card-text" style={{ fontFamily: 'Verdana, sans-serif' }}>
                The chairman provides strategic direction and leadership for the organization. With a strong vision for the future of news, they are committed to innovation and integrity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <img src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Dwayne-Johnson-The-Rock-is-an-American-actor.jpg" className="card-img-top" alt="Editor" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: 'Georgia, serif' }}>Editor</h5>
              <p className="card-text" style={{ fontFamily: 'Verdana, sans-serif' }}>
                Our editor is responsible for curating and refining content to ensure it meets our standards for quality and accuracy. Their eye for detail keeps our news reporting sharp and engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <>
  <section className="team-section">
    <div className="container">
      <h2 className="text-center mb-5">Our Team</h2>

      <div className="row mb-4">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Technical Team</h3>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Jeff-Bezos-American-entrepreneur-and-businessman.jpg" className="card-img-top rounded-circle mx-auto" alt="Member 1" />
            <div className="card-body">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">Lead Developer with a passion for building scalable applications and strong expertise in React and Node.js.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Barack-Obama-44th-president-of-the-United-States.jpg" className="card-img-top rounded-circle mx-auto" alt="Member 2" />
            <div className="card-body">
              <h5 className="card-title">Bob Smith</h5>
              <p className="card-text">Backend Developer specializing in APIs and cloud services with a knack for optimization.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Beyonce-American-singer.jpg" className="card-img-top rounded-circle mx-auto" alt="Member 3" />
            <div className="card-body">
              <h5 className="card-title">Charlie Brown</h5>
              <p className="card-text">Frontend Developer with a flair for creating beautiful, responsive user interfaces using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Research Team</h3>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 4" />
            <div className="card-body">
              <h5 className="card-title">Diana Prince</h5>
              <p className="card-text">Research Analyst focusing on market trends and data-driven insights to inform decision-making.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 5" />
            <div className="card-body">
              <h5 className="card-title">Ethan Hunt</h5>
              <p className="card-text">Data Scientist with expertise in machine learning and statistical analysis for innovative solutions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 6" />
            <div className="card-body">
              <h5 className="card-title">Fiona Shaw</h5>
              <p className="card-text">Behavioral Researcher studying user interactions to enhance user experience and engagement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Update Team</h3>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 7" />
            <div className="card-body">
              <h5 className="card-title">Gavin Rossdale</h5>
              <p className="card-text">Content Manager responsible for curating and updating news articles to keep our audience informed.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 8" />
            <div className="card-body">
              <h5 className="card-title">Hannah Montana</h5>
              <p className="card-text">Social Media Specialist with a talent for engaging the community and promoting our latest content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 9" />
            <div className="card-body">
              <h5 className="card-title">Isaac Newton</h5>
              <p className="card-text">SEO Expert focused on optimizing content to increase visibility and reach a broader audience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Management Team</h3>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 10" />
            <div className="card-body">
              <h5 className="card-title">Jack Sparrow</h5>
              <p className="card-text">Chief Executive Officer with a vision for innovation and strategic growth in the organization.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 11" />
            <div className="card-body">
              <h5 className="card-title">Lara Croft</h5>
              <p className="card-text">Chief Operations Officer ensuring efficient operations and enhancing overall productivity.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img src="https://via.placeholder.com/150" className="card-img-top rounded-circle mx-auto" alt="Member 12" />
            <div className="card-body">
              <h5 className="card-title">Martin Luther</h5>
              <p className="card-text">Finance Director overseeing budgeting and financial planning to support our mission.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

          </>
        );
      case "awards":
        return (
          <>
            <section class="achievement-section">
    <div class="container">
      <h2 class="text-center mb-5">Our Achievements</h2>
      <div class="row">
        
      
        <div class="col-md-4 mb-4">
          <div class="card achievement-card shadow-sm">
            <img src="https://engraveawards.com/cdn/shop/files/breaking-news-award-1_530x@2x.jpg?v=1718590688" class="card-img-top achievement-img" alt="Breaking News Award" />
            <div class="card-body">
              <h5 class="card-title">Breaking News Award 2024</h5>
              <p class="card-text">We received the prestigious 'Breaking News Award' for excellence in timely reporting and dedication to bringing the latest news to the public. Our commitment to journalistic integrity and real-time updates was recognized as a top achievement in the industry.</p>
              <p class="card-text">This award has solidified our position as a leader in the news industry, constantly innovating to keep the public informed.</p>
            </div>
          </div>
        </div>

       
        <div class="col-md-4 mb-4">
          <div class="card achievement-card shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39uqQZZ7k9F4zsuZeh63pvjIYlkKt_LkVN-mP0nobojgeu3S90_3Y10QvvgoCrntFvfk&usqp=CAU" class="card-img-top achievement-img" alt="News Emmy Award" />
            <div class="card-body">
              <h5 class="card-title">News Emmy Award 2023</h5>
              <p class="card-text">In 2023, we were honored with the prestigious News Emmy Award, a testament to our exceptional coverage of global events. We consistently deliver in-depth, investigative reports that shape public opinion and provide clarity in times of confusion.</p>
              <p class="card-text">Our Emmy win has not only brought us industry-wide recognition but also fueled our determination to uphold the highest standards of journalistic excellence.</p>
            </div>
          </div>
        </div>

       
        <div class="col-md-4 mb-4">
          <div class="card achievement-card shadow-sm">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhISFRUVGBUWFRUVFRUWFRUXFxUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8iHyYtLS0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0uLy0uLS0uLS0rKy0tLf/AABEIALUBFgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQMCAwUFBgUCBQQDAAABAhEAAwQSIQUxQQYTIlFxI2GBkbEHFDJCocEzUnKy8GLRFRaCs8JTdJLhJDVU/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QALhEAAgIBAwIEBQQDAQAAAAAAAAECEQMSITEEQRMiUaEUYXGBkTJCwfBS0eEF/9oADAMBAAIRAxEAPwD0OaJpk0TUCw+aJpk0TQBr8C5v6D961xWNwHm/ov71siqR4Jy5FooopiI8nIW2rO7BVUSSeQFYfCO0y32PhKKSQhb8wEeKeRksBA3HpvV/jvClybRtsY3BB3gMORIB3+Nc5wPstcOQcjKj2ZIsW1PhVYIDc+cE7b8zuZmjexN7bLc2cjtIiM6m1fOhmUkJtKrqJEncR1HLrFLd48dGpLFww+ghoB2RnLALJP4Y5dfdRc4flanZMgDUzmGBcAGdAAOy6duXOKBgZg1RkruSRNtSR5DlHToB15kyNbC3Ij2ll9K2L2345C6o8UaRq3/CZPSPlZx+PK+oi3dAVGeSFAIXTsDO58Q93mRTfuOVqMZACksfw6iZYlY1SFgaRA22J60gwczmcpSZB/hgADqIA32nnNGwble72rTQHWzeIPKdKgjVp/m+I+fKTWpg8Q70uO7uJpAPjAEyWGwmeaGqtjCywU1ZKkAguO7Hi3lhvuNvL3REbst8OyhJOVLkn8g0gQgUBOXNWk9dXSjYZs0RWXwzDyUYd7fW4vjLDTBJYysHoBuIFatIYlFFLQAlFLRQAlFLRQAlFFFABRRRQAUGiigDn+LfxW9B9BVSatcY/it6L9BVKai+Sq4HzRNMmiaAHzRTJooAbNE0yaJpDHzRNMmiaANns/zf0X962hWJ2dO9z0X962xVY8Epci1HfyEQS7qg5SzBRPlJ9Kkrzr7cY+5WJ/8A6F/7N6mbw4/Emoep6BcyUUqGdQW/CCwBb+kHnzFJfy7aQHuIpPLUwWfSTvXhdviV25l8Kx8hSLuHfW0xPMqbto2zPmAInqAD1qz9ozffc7M8ahcOzCywGplZTcVQebeO5y/9MUrOtdD5lFvtfvS/J7TezrSHS922p8mdQfkTTf8AiViCe+tQIBPeLAJmBM+4/KvJO1uJj5XCbXEypOSVs2nfU0Sjd2/gmOYPTrUHbjs7jYvCca5ZQq197DXSWZgSMa8QQCdt3bl507FHpIuk5O2647rnuezZGZbtx3lxEnlqZVn0k70t3JRdOp0XV+GWA1ek8+Y+deSYnBrXEeJ8QXK1OLNsC2AxXTAUCI8tzHKSZmuSe5cv8PwbZOork3rVqTyDJjlVB6DU59KLHHok6Wr0vb1Vn0Q2QgYIXUOdwpYaiN9wvM8j8qS5l21YI1xAxiFLAMZ2EAmTXi/Z7i9zK4xw5rwIvWkaxdnmXtpkSx8iQwkec1m9q8g5WTnZyXFBx7tlbIJEsFc2wyDmQCgfb+eiwXQvVpb7X97pHvdzIRSqs6qW/CCwBb0B51LXlXa/OXIzOA315XCjj3artkkfDlXqtM5cmLRGLfe/Z0FFFR37mkT16UpSUVbJJWSUVkG9fjUNWnz8PL0itLGualB69aljzqbqmvqblBxVktQ3ctF5sPhufkKocSyHDqvJSG26kg+flEVlZzkISDBFQy9XpbUUbhhvdmtf47bWdnPwA+pqrj9pVdwi22kzuSOgmuaxrpYtqM7N9KbwdvbJ8foa5/isj7lvAgkdDd7UQY7qPUkftU1vtDMeFPTUw/8AGsvMbdtuh3282qrfPhX0H0rPxOS+Q8KHodbY4kGE6fkZqZc60Tp1qD5Ewf1rFwJhp/mPyqzmoO75Dp0rqhnm42QlBJlXjB9q3ov9oqlNF07/AOculMmqqWpWOq2HzRNMmiaYD5opk0tADZommzRNADpommzRNAG12c53PRf3rdrB7Nne56L9TWhxviH3fHv39Orurb3NMxq0KWiYMTHOKpHgm03KkXqwe2PZi3xGytm5cdAri4CmmZCOkeIcoc/KubtfanZOG+QbUXlcWxj95JadwwfT+HSG3jmseUx3vtLuzirawe9fItd6qLeOoHXdUqPZnVtaJnbn7q0dEOmzxlaVNfQ3eK9h7F/LsZmt0uWjbJC6dNw2mBUvI57RI6R5VUwvs0wlN1r4fIe4xfVcOkqWJLRogbkzvVLiP2hZOPj99f4c1om6ttUe6RqBtu5YN3fTRER1qfhn2hM11sfJw7mNe7t7ltWbUH0IzwSVBWQjQYI2PWlsb09So7Pb5Ndie19ntoYVzB+8Xjbe4LuohNSkadhtEHTPxNXu0XY63l4ljEe7cVbJQhl06jottbEyI5MTVfg3bUXuHXuIPa0C33ns9erUUA0jVpG7EgcutJ2E7bDiJvKbIstbCGO816laRM6ViCP1FPYzL4hXJ/te/HJDx77O7OReN+3fv47uoW4bRAFwABTI94AkcjHKnXPs6xu7xLSPcQY1w3QfCTcclCS5I/0DlFb/AGl4uuHjXslhq7tZCzGpiQqLO8SSBNcMv2rMca5fGGCbdxEdO+5LcVilzV3f8yFYjy86Nh431E4rS9lt2Oiyuw1ls77+ly5buQ0qunSXa21s3NxIMNPqJ6mqGH9luAllrTB7jnVpvMYdJEDSB4due4q1/wA92vv9vDCDQ9tX77XyLWjdClI/lgzP5uVZCfahOG+X91j2y2LSd7vcJTWzE6PDCx0O5ijYcV1VJK+381/JbyPsztPaxrX3rIH3fvO7YaA3tHD842gjaK2Oy/ZX7m7t96yb+sBYvPqCwZlfI1V4b21F7ht7PFoBrQuarOuYKbga9PVSp5daxMX7UX9i+RgPasXW0reFzWvOCQCgmN53nY86NgceomnF9nvxzz/aPSKzc3e4B5Db41xub9pF5b2Vbt8Pa6uMzi463TsqsRrZe7OkeEnnXQcK41bzLdrJtBgrqQVb8SsrQymPI9a5uq3h90TWCcPNJHRgdKpvjMhm3y/l/wBp51cpavPGpo51JowOIhyVd5EEADblMHb41T4h+BvSt3iiSo9G/QSPpWHmjwt6V5WeGibV2deOVpGDgHx/A/Q0cHPtk9T9DTcQw4/zntRwr+Nb/qqaLs0eJPDkeYb+5qgvnZfQUcYaH+Df3tUd1uXoPpSa3Mrg6LCH4v6jVrN/h/KoMYc/U1Pm/wAMeorrh+hnNPkyc0Qw/pT+0GoJq3xja6R7k/tFUprqSpUZHTRNNmiaYDpops0UAMmiabNE0hjpommzRNAG52Z53PRfqal7a/8A6/O/9ve/7ZqHsxzuei/U1v1WPBO9M7PEcHsfZfhJ4gdfeLavDR+Ust11Vz1kLG3LYGsjMCA8MN030tjFGprI9qvtsmNE7TMfAmvoainR2Lr5W7V7vvweI9ruK2b/AAuxaxzksLGQqlr6jW2q1eYElSZq3fzjxHiS5VizeFmzjXFdnWBtZv8AUEjc3VAEzsTXscUAU6Mrq0lSj69/XnseBjLccFx8RAxfIyX8MblUKED4u1v5Vr8BuX8Pi2M17FOKt+2uPo1BwQqLbVtS7DxJa29/vr2N3URJAnlJAn50rkDcwAOp5UUOXW2mtPN9/U84+2bKd0xcK0GZ79zUVXmdPhRfISzz/wBFchlYd/73fs3cU433ywVS1qDqHtqGssHXzuWY8/aGvdlIO4gjoRuKRbimSCpjnBBj1oaM4ur8OCio+v8AfZHzhZwLhw2zRr1Jft2Ad5Cdwf0Hs1rWXHu6uF4tmw15rSDLe1ITU91xe0sTsItrbG/nXvAur/MvzFPiiisv/Qb/AG/2q/2eH8Iv3bNrjWHdtNaZ7T3ltHfQeZUMNm8FxP8A41TwuGi3/wAKu5LXrmJeZtSFm0WnW4y7LyVd0Y+YD175FEUUY+Oe9R553+VHiacdTEy+NK9u6zZBvW7YRZGrXdHiM7DxDlNdp9nvDblnhtoXEZG13H0sIYK7bSOkiDHvruIoZZBB5GsZIaouJifValSVcX9lRDh3JUeY2NT1l49w23IblyP/AItWpWcE9UafK2ZzTVMrZ48I+P0NYGV+FvQ1u8RbwgeZ/wA+tYjiR6iuLq15y2Hg5kbNPx/Wjhhi/b/qH1rRyMVQZFZeF/Gt/wBa/UVzROq7Rd7QCHHof7if3qDrHpVrj0ahP+r6ipMThwZVMncfpNNmU6Ru2OXrv+lS5/8ADHqKgxU0qB5VUv8AFAzG1BkE79NpH7V0J1Hc52rewcbPtT6L/aKoTVvjDTdPov8AaKpTXWZQ6aJps0TQMdNFNmloAbNE0yaJpWA+aJpk0TRYG92X53PRfqa6Cuc7MXAGuei/U10SsDVYSVUSktxaUUlKK2ZFpKKWmB5N9qHBrCXbuTlZD3XupoxMVRDI0KoaZPgBknYSWjc1mcRwcgpwXBzGuabjMXt6jIVrqhFY+aoYHlNdj2g+zs5OW+WMy7bY6dAVZNvSoUBG1AjcE7Ruxp+b9nxu2bKvm32v2HZ7eS0s4DFTpILTsVBBBEUqPTh1EFGKcuPlxs0q+nucn2d4Q7txfh1vJaxYt3AQx8QVEuXAwO6wCqrJneN6q9keF23zbgwzc+5raa1k3CYW9qtsrEeUlgwHQLPUV2Nr7NlGNkWjlXTdyGRrt4jdgrFtOnVyJYkyTM1V4Z2AawQpzbz2IcPYgrbdXVlYFQ0fmnlzFYka+Ig1Kpc/L5K39fQ4Q8DXGz7BvWWs45vgWmR1u6jbcaW1+RJUnYbHYbGveLF8nnXneB9nNu3ctlsm7ctWWL2rLAAKZDbkGOYBMATFdwjRWGyXV5I5Kp3RrUVXs5INS96Kopo4KY+im94KA4p6kKitn42oSPxD9R5VFw/M5K3oCf7T760JqlnYAeSvPqOjf7H31DJCSl4kOe69TcZJrTIbxhPCjfyuhPoTB+v6VjKfCPdsfUbGr1vLYA27oZliCfzrP8w6+orFt5IF65bJ2ZpU9JO5+G/6Vx9ROM3qX4L44tbD8lCRsD5fGswYZW4jyNnBI8hMz76134gtt9DLKEeLzB6EVFlYIMNZcMCdgemxP7Vy2+UdEV6lDtB+JY6zHyWtjBWEQf6R9KyPutxmhkBgbEf71s42MUUTI9TNUjPcxKNKixduhEZjyUE/KuLxcti8dWIB+Jk/5762eM53sY3GswB5jmT+lYvBSO9DHkpmYnccv899Uk0zMY0b2cfGx89x6dKgmnZF3U06SogAA84AgT8qimu2LVbER80TTJomnYD5opk0UWA2aJps0TQMdNE02aJoA1OCndvQfvXQ4j1zfBju3w/ety08ULkTNWlrDzu02Pjutu8zglQ5ItXXVVLaA1x0UqiztLEVrnIQapZfD+LceH18qumQJaWqY4naNxrQuKXVVuMs7hHLBW9Dpb5Vm8P7UY2Rq7q4fCFYl0e2CjEhLiG4BrQkGGEgxzobHRvUVn/f1GxZRG5lhsPP9R86ec9ZIlZHMSJHqPiKWsekz8Pi1w27bsus3YCots29yjXD47jwywp3Hu86bhcSW+WKK2gaIc6YbXaS6IAMjw3F5gbzTMnKx27uyVBXQzoQDoVbcIYuDZTDxE7gt0mnW7tpfwFBqIMKRuQoQQB7kA/6azKSY4xaLdMY1A+Uo2LAGJgkcvP0qjncXt201sw06lSRJGp3CLMcvEwE9OtSlIokXXeo3vN5mqONxFLmrSwMM6Hp4kMOBPODtt5GnY+bbuKrI6srSFIPMjmB8qhK2UVFoX2/mNSJebzNUxeT+ZfLmOfOKMTKW7bS4hJV1DKSCpIYSDB3Gx61lWPY2sfO8zVtcxfOubd6QOarHK0YeNM6S4tu5sd/I8iPQ1jcV7PM3itsCw5A7E+6RsaXCuEEVvWnkVvRDL+pGLlDg497HfAyNN1NnU7Ex1rPW06E+Eg8p8uZJHnyrtuIcOS5DGVccnXZh7j5j3GsjMd7YIdVfopG0noGHSfMda5c3TuK24LwzXsc7ZV9Yh35nedvXccq2bPEItu1xgY2VojVIB5ee9UMbE9qpOkFl1aYkDUNvrVe/YbIuP4oRDpHkPMKBzMz+lQxxcmbm0VM293h1Ny5KvWP2mn4TrbG8A9Y/wA2qZ8VU5fOszLFX8OuSWu+DYF0NuOVE1T4afZj4/U1amuuPBgdNE02aJpgOmimzS0AMmiabNE0gHTRNNmiaANTgvN/QfvW0tYXBW3f0H71ri5T2EYfaPs0+VeFxbqIO7W2dSOzLpu95rTS6rPuYMPdVR+xEtkt3iMbzl1LLd1b5K5MXNNwBtJWFMbe8SDq9q2ufcsrutfed0+ju9WvVp20ad59K5Hi+ffTEa3jfeBrt5Otxaz7r98Fti1btm97S0CrMdf4dSH3z0QcmtmSkkmdVwXs4bFzWXtNONbx202Rbabb3GDoVMKpW5BWPyLvtFUj2YyDj2sd8iy9uyLKW1OPsUtKyy5Lk6zKbqQBo/1GqmT2jzQ1xFsvKHI1H7vdIVBl2UsuhAi6RjvcfSpJJX4U5uPZne46KGZH7sM5w7tsMLl24nebk6CqqjENp5jmGhRqfIeUix+wiqLYuNauFNALNaBLKmD910mSdtUXI9w671RTshdLXtT2k5qlw2ld7s4FvGlpYg2p1nu2HNQadhZ+Wtu07d8X7iwt249i8zIfvDrePc/nZQOYEkENuKsY3FM53tF0hf8A8cOpsOpbve+DvJMpAS2xUzp1QazKWRXTQ0ovsVMnsqwRodTAvFbaJ4WL3sa8LcO4BUnGKkEie8PKouG9l3KK9wW7dwMrqoQHutOc+VCEEhZVgkAmPM061lXl4k+pcg22Y2wIud2o0JDNI7sISrFSssSxkjlS5uTkffCyLeFtSMcGPYy9tm70rMtFxrQ1RACtvzqDnl4vtf8Awqow5r5Fji/Zw3rt653ijvA5nRNwFsY42gvq3tb69MfiqWzwNVtZVkEBb5lQq6RbPc27cgDrqt6vjWRa47msGLWGQaNY9kzESyWgpE7kMLrmPy6dj1XH4rnMtxtG9u2xCmy4Nxu+vW1ImD+FEfSBJkcprDjmqm1tRpPHfDL1vssdVljdUle6Nwm34i6X2yHe0Z9n3jOwbnIinr2Q3sHXai0TsLbLt3wvKy6XEXPCFJ5GF22g1LPFM0hGgQBqPsbnjH3hbYENBU6CTy6SNqevGs7TfJQLpZQB3N6VBuupAOkq/hCnUJAmTAIja8b1Rh+H6FluyAixoayrW2dnfupLl7qXCYJ0kwiiWBOwIIiD1pNcrwfi+S99EuIwRrat/AdNJ7pGOssYU6iwgFvLYgmunmpZXLZSZuGnsI1KtMJpQ1TRtllGitGxlxWOXqS29XgyUkbTZU1VyQHVl8x8j0PwMGqne0n3gDnMe7nVm1W5OjMxsgm6xPS2CPgv/wBClskWrSr1iT6nczVa5fC39emI30AahAERM9ZPWo8/LRzNtXAM7NHzX3etcOBpN0XyJ7DMjKG9Y+XfqfJmsy7VHZmKNzhbezX4/U1bmqPCv4S/H6mrk1VcAx00TTZommIdNFNmkoASaJpk0TQMfNE0yaJoA0uEndvh+9aatWNw54LfD961bT0hMtpT5qINR3lUoQ9miq13LipLj7Vi5tzeo5XSNwVl/wC/A1BkZoG07/T1rLW5TLPDy+QqMQZgwdxLFoYg/iCrbuHSdidPSQeVznNqEeWVajBWy8uYrDUO9YHkyWbjofR1UqfnTEzEO4ZSOUg9eRBrTz+0y973dsa7dse1vErEiBsdgRPMjz2HINjcfxAbiXkaVu6dxEMCVtxI2YeNGDeWrzrWTpZRjqjK/r3MRzeapKiy7UwNUIlfCeax9KA9Ri01ZYtK1OL1CppHeqWZLCXKsK9ZiPvVu29NMTJyaNVNG9P01VIwwNyn27oqM2p5VELLA8qpHkwy+LgqK69R2wfKruBiG4428IMsenp8atyTMtri28oLG+u2CfKEII+bU3iOLpu3B/qb5EyP0NV+LW2GS2oiSxMjcbb9PWun4vglgt0QZUatO/T8Q8xXNgVuRTJskcZnAAVh3TvXQcSTntXPXRvW58iiza4b/DX4/U1amqfDj7MfH61ZmtIY+aJpk0TTAfNJTZooAbNE0lFIYs0TSUUAWcQ8/hWjYesvGPOrHexSXIdjVN+ovvFZv3gkgCSTsAOZqVrNxfxI4/6TVtjKRfN2RWTlnepXvwKpXXmuXOyuNEXuq5xTIYNYzBuCiW73+l7etd/IMLriehCedUauYDuFd1ZCgnUh/N0J/b37+6o48nhu2ayw1IibhVm8yKL9u3jSWuWyRbeeixsYj5SY57avEGt37lmxZAW1a0liBpCorq5Y+Wru1UDqGY8hWVbs2CAwtXE8lV3UD0VH0inC472ytq13doE94Ngx/mmPmdySP16p9RFI5I4fNYZWV3ty7d6O5K/0iFU/IA/GmK1SJZmAB6Ur2gCAGBPWPPyB61yNb2zuim1shRcprvSaKQpT0MzqQI1WleqyJUl3YVpRZmyU5MU5MoTzrEybxqD7ya0nQUdnZug1NrFcda4oy1q8EyLmVdFtRAiWb+VR1953A+NWhJEpRaOgwrPePpHLmT5CpeN5zoht2Lb7fmCt8Yj60+/xOxiqQgmPxGfLzPX4VzeZ2kv3ZCNA/wBMAgetGXLFKk/wZhBt3RmOzhgTq1dJG/y68663s1nXtka02joQpAX9orkWe4xB1Sw5HUs1Zx+0d+wQDq36MJB+VcmJ6ZWdGXHJx3R1naThw0m4o/qA/urg79kE16Pwriour41AJ94INYXarg6BGvWIGn+Ig8j1A6eld0ql5kcitOmYFkQABT5qHHuSoIqWslULNE0lFAxZopKKAGTRNNopAOmiabRQA7vtNI+VVfJPKq5eoubU6KKNqzY4Tch9f8vL1P8Ahrft8VYdTXM4Wyj371ZD1y5OokpuiqxJrc6P/iQb8QVvUA0xhjtztJ8JX6Vgi5T1vGhdTLuLwV2Nc8MxTyDr6NP1qG72ftMRpvEAbkFRB8pjnH71RGQakXKNbXUR7oy8UvUv/wDBW/KyH4x9arZHCMgEaQYJ8YUzIHIiDsf2PpSLnGpk4kRVPGxy5RjRMzM3Ge1b0ojKOux5eQ91ZC3IrsV4wwrC4niK5LoNJO5XofTyqeVxlumd3SZHDaSI8XKB2bn5+frVuBWAwKncEGrmDmqCBc1aepXcj4Gt4stbSKdT0an58f4NOBUOSdq07XDrVwTayFPuI3+NQ5PALx/CbbejR9a69mtjyWmnT2OXym3qsWrWyez2VMdy3wKx85rNyeH3rc67VxY5kqY+fKotFUR2ULMFESfMwPia1LecmOpFq42oganVYnqANW4APlWTjN4p8qiO5o4HpcnRZvZTXObOR7yfpNRlgKYWgVUuXZrK8x0+XCvmTXMk9Nqfj3yQQSSPI7jf3VSY1Ys7CKclSDp5ylkt8DO90k7cvT/atTB46U/9T3jW0H3FQQCKw77yxI86S21WgcWRLU6OwTJS4NdtdKn8sAQfzQByEzSzVDg59kvq39xq7TZlDpomm0UhjpoptFADZommTRNAx80TTJomgCHMbl8aqF6sZwkL8aqohkeoqMl5ikeDbTYAeQFOmq5u0C7Xl02zrFUDTqIBMTvvvz61g8O4+Gt2ma3bZrgB9noAtkm2qq3jaTqZfLaNhEVPxbi7Y9u2wVWnUCCSI02blwdOXs4O3WncN4lduQe7TRN1S6t1tuyBlHUHRP8A1DfauqEGottWvrRGTt0mVrfaNSguGyoURrjSwJOML8IRyADKCSPOrNrtBZbvPYnwWTfgaGZlCgkKB18cCecnoZNLA7VhhbDpJuaI7rxKupLbENP5h3oEeQJ91S/82WgqtofdGfY22hVTXBKsRMdOn61R43xo9zCkv8vYmHaK2GE20g6ApVkaSXdTpYGHMoCoG538qbb7RoT4bIMahp8M6l7sjxTEQR58hB2qvl9rVtxNlwAzBpa3MKt+dENBM2CIMTqEVdxu0SO5UI4h3Us2lVUJOpzJ5eE7c9x8G4Nb6PcV3+72HWO0FlheItQLShjOgGCxt+IfkHhJk7aYNT8N4zbvOEFmAVJ1eAgkKjEbcxF7Y8jv51m5fFhayLoVcfUe5DuWIZdT20TvduUO50jkAska9of+aHNsuq2ARat3NJuQVZ1RhbYmBMEn3ALzLAUvDtbR9zSnT3fsdTkWlOnYbkjb0J+oqhex45VK2SCLZJ57/ND5jb9KjuZg6b1BKR2Y5SXBACw3EiPLmKv4vH7qbE6h7+fzqj3oNMdBzq0bLtOa8yTNnJ4+zjwkj4xvIqbh/aC4pi5cleW+49K5lxHKodZrav1OeUYxjoo7LO47jkH2Fpz5lQB8+dct3epjpESeQ5CmWwW61Zt2z5miU33DHHHDhFm/wi0VXx3A3XwqVn5g+VZrcL5+Mf5HPerox551NaxkHQVnxWhS8K7av7mUuDvC7n19eVR5OLeQfwbg8zpMR7tq6S0wHICtHH4gV61uE03uRyZKVQVHmrbc9vWltmvUGzkb8aI39Sg/WoWxcN/xY9r4DSf0rpUonE0zmeDH2S+rf3Gr00/LsW7bFbS6UEQJJ5iTuffNQzTGh80TTJomkMfNFMmigBKKKKACiiigCzg4guEg9K0l4NbjrRRWklROTdnMMTTO8NFFeZSPSGAnlO3QQNvdy+FKrMPzfoPd7v8AJpaKYqAE+fLlsux8+VLJ8/PovWZ6e/8ASkop2Kh4nz/Qf7U7TMyZnnsu/Lnt7v1oopWIcVPnueZhd/0qC7O+/P3L/t6fKiinF7l8K3ImBmSSflSxRRVGWkWLFn31LpooqLbIuclwynnGAIqlNFFdEP0km23uTYt0ggedaqUUVPIafBIGpdVFFTJsNdJ3hpaKDId8aO/NFFaTFQpad6Siiu2H6UQfIUUUVoQUUUUAf//Z" class="card-img-top achievement-img" alt="ABC Vice Award" />
            <div class="card-body">
              <h5 class="card-title">ABC Vice Award 2022</h5>
              <p class="card-text">In 2022, we were proud to receive the ABC Vice Award, which recognizes the finest efforts in investigative journalism. Our hard-hitting stories that unearthed hidden truths have made a tangible impact on society, bringing justice to the forefront.</p>
              <p class="card-text">This accolade highlights our fearless commitment to revealing stories that matter, even in the face of adversity.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

          
          </>
          
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
          <li onClick={() => setActiveSection("mission")}>Our Mission</li>
          <li onClick={() => setActiveSection("vision")}>Our Vision</li>
          <li onClick={() => setActiveSection("ourteam")}>     Our Team</li>
          <li onClick={() => setActiveSection("awards")}>Awards</li>
         
        </ul>
      </nav>

      {/* Content section */}
      <div className="about-content">{renderSectionContent()}</div>
    </div>
  );
};

export default About;
