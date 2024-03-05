import video1 from "../../assets/WaitSystem/wait_animation.mp4";

export default function Animation() {
  return (
    <>
      <div className="container mx-auto ">
        <video
          playsInline
          autoPlay
          muted
          loop
          src={video1}
          className="z-10 py-24 mx-auto xl:px-12 2xl:px-36 md:px-8 px-0"
        />
      </div>
    </>
  );
}
