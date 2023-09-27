import $ from "jquery";

function Page6() {
  $(document).ready(function () {
    let slidecount = $(".dot").length;
    let currentIndex = 0;
    $(".next").click(function () {
      console.log(slidecount);
      currentIndex++;
      console.log(currentIndex);

      if (currentIndex >= slidecount) {
        currentIndex = 0;
        console.log("came");
      }
      showimages(currentIndex);
    });

    $(".prev").click(function () {
      currentIndex--;
      console.log(currentIndex);
      if (currentIndex < 0) {
        currentIndex = slidecount - 1;
        console.log("works");
      }
      showimages(currentIndex);
      console.log(currentIndex);
    });

    $(".dot").click(function () {
      currentIndex = $(this).index();
      console.log(currentIndex);
      showimages(currentIndex);
    });

    function showimages(index) {
      $(".slide").hide().removeClass("active");
      $(".slide").eq(index).show().addClass("active");
      $(".dot").removeClass("active-dot");
      $(".dot").eq(index).show().addClass("active-dot");
      console.log(index);
    }
  });

  return (
    <div className=" p-5 page6 slider-container">
      <div className="bg-3 w-100  border container-xl page6div slide active">
        <h2 className="p-8 page6txt">
          "Working with evil Tech has been a game changer for our business.
          Their expertise in cloud computing allowed us to scale our operations
          quickly and efficiently, and their personalized approach ensured that
          we got exactly but we needed."
        </h2>
        <div className="d-flex justify-content-center p-5 page6nameicon">
          <img
            className="bbimg"
            src="./images/imggggg2.jpg"
            alt="walter white"
          />
          <div className="m-3">
            <div className="john">John Smith</div>
            <div className="ceo">CEO of Uwang Corporation</div>
          </div>
        </div>
      </div>
      <div className="bg-3 w-100  border container-xl page6div slide">
        <h2 className="p-8 page6txt">
          "Working with evil Tech has been a game changer for our business.
          Their expertise in cloud computing allowed us to scale our operations
          quickly and efficiently, and their personalized approach ensured that
          we got exactly but we needed."
        </h2>
        <div className="d-flex justify-content-center p-5 page6nameicon">
          <img className="bbimg" src="./images/bb.png" alt="walter white" />
          <div className="m-3">
            <div className="john">Walter White</div>
            <div className="ceo">CEO of evance Corporation</div>
          </div>
        </div>
      </div>
      <div className="bg-3 w-100  border container-xl page6div slide">
        <h2 className="p-8 page6txt">
          "Working with evil Tech has been a game changer for our business.
          Their expertise in cloud computing allowed us to scale our operations
          quickly and efficiently, and their personalized approach ensured that
          we got exactly but we needed."
        </h2>
        <div className="d-flex justify-content-center p-5 page6nameicon">
          <img
            className="bbimg"
            src="./images/imggggg3.jpg"
            alt="walter white"
          />
          <div className="m-3">
            <div className="john">Jack Ryan</div>
            <div className="ceo">CEO of zubek technology</div>
          </div>
        </div>
      </div>
      <button className="prev">❮</button>
      <button className="next">❯</button>
      <div className="dots">
        <div className="dot active-dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Page6;
