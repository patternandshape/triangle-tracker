var isTriangle = function(side1, side2, side3) {
          var oneplustwo = (side1 + side2);
          var threeplustwo = (side3 + side2);
          var oneplusthree = (side1 + side3);

        if ((side3 >= oneplustwo) || (side1 >= threeplustwo) || (side2 >= oneplusthree)) {
          return "non";
          }

         else if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
            return "equilateral";
          }
          else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
            return "isosceles";
          }

          else if ((side1 != side2) && (side2 != side3) && (side1 != side3)) {
            return "scalene";
          }
};

  $(document).ready(function() {
    $("form#triangleForm").submit(function(event) {
      var side1 = parseInt($("input#length1").val());
      var side2 = parseInt($("input#length2").val());
      var side3 = parseInt($("input#length3").val());

      var result = isTriangle(side1, side2, side3);

      if (result === "equilateral") {
       $(".output").text("an equilateral");
      }

      else if (result === "isosceles") {
       $(".output").text("an isosceles");
      }

      else if (result === "scalene") {
       $(".output").text("a scalene");
      }

      else if (result === "non") {
       $(".output").text("not a");
      }


    $("#result").show();
    event.preventDefault();
  });
});
