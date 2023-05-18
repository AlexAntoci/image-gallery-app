A test-project in order to showcase React JS skills.

Several notes before checking this application:

1) This is my first time ever building an application using react and its features.
2) This application HAS bugs (will enlist them below) and its still in development.

BUGS:
a) Filtering is working but you have to swipe 'images' with 'filtered' and then press save (not sure why map loop does not work with filtered variable in ImgSlider.jsx)
b) In order to fully visualise the full image onClick, you need to disable in ImgCard.css the 'property: pointer-events: none', but this will make the slider difficult to move around.
c) The slider's scrollWidth does not change, even though I used an useEffect Hook.
