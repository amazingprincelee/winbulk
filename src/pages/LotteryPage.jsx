import React, { useEffect} from "react";

function LotteryPage() {





  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container lottery-page">
      <div>
        <div className="status-container">
          <h1 className="text-center status">STATUS: Under Development</h1>
        </div>

        <div className="content">
          <h1>About WinPlay</h1>
          <p>
            On creating this revolutionary WinPlay system. We are committed to
            delivering an exceptional user experience that will leave our
            community members delighted.
          </p>
          <p>
            What makes our WinPlay system truly special is its uniqueness. In the
            vast crypto space, nothing quite like it exists. We have taken great
            care to ensure that our utility stands out from the crowd, offering an
            innovative approach to lottery participation.
          </p>
          <p>
            While we are eager to share more details about this exciting project,
            we also understand the importance of maintaining discretion before the
            official launch. However, rest assured that our team is working
            tirelessly behind the scenes to bring this groundbreaking concept to
            life.
          </p>
          <p>
            To stay updated on the latest developments and the highly anticipated
            release date, we encourage you to follow us on our social media
            platforms. By doing so, you will be among the first to know when our
            WinPlay system is ready to revolutionize the way our community engages
            with lotteries.
          </p>
          <p>
            Our team comprises professional developers who possess extensive
            expertise in their field. With their skills and dedication, we are
            confident that they will create a seamless and secure experience for
            every user. Their tireless efforts ensure that our WinPlay system will
            meet the highest standards of quality and performance.
          </p>
          <p>
            As we continue to build this main utility, we appreciate the patience
            and support of our community. Together, we are on the brink of an
            exciting new chapter in the world of profitable games, and we can't wait to
            share it with you. Stay tuned for updates and get ready to embark on a
            unique WinPlay experience like no other.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LotteryPage;
