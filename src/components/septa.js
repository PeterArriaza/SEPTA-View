function myCurrentTime() {
  var a_p = "";
  var d = new Date();
  var curr_hour = d.getHours();
  if (curr_hour < 12) {
    a_p = "AM";
  } else {
    a_p = "PM";
  }
  if (curr_hour == 0) {
    curr_hour = 12;
  }
  if (curr_hour > 12) {
    curr_hour = curr_hour - 12;
  }

  var curr_min = d.getMinutes();

  curr_min = curr_min + "";

  if (curr_min.length == 1) {
    curr_min = "0" + curr_min;
  }

  return curr_hour + ":" + curr_min + " " + a_p;
}
function allDate() {
  var mydate = new Date();
  var year = mydate.getYear();
  if (year < 1000) year -= 100;
  if (year < 10) year = "0" + year;
  var day = mydate.getDay();
  if (day < 10) day = "0" + day;
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  if (daym < 10) daym = "0" + daym;
  var dayarray = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var montharray = new Array(
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  );
  return montharray[month] + "/" + daym + "/" + year;
}
function timedReload() {
  // setTimeout second value is milliseconds
  // ie: 1000 = 1 second, 30000 = 30 seconds
  setTimeout("document.location = document.location;", 180000);
}
$(function() {
  $("#datepicker").datepicker({ minDate: 0, maxDate: "+3M +0D" });
  $("#ui-datepicker-div").addClass("round_all");
  $(".ui-datepicker-header").addClass("round_top");
});
$(document).ready(function() {
  $("#time").attr("value", myCurrentTime());
  $("#date").attr("value", allDate());
  $("#datepicker").attr("value", allDate());

  $("#datepicker").click(function() {
    $(".ui-datepicker").css("display", "block");
  });

  $("#datepicker").click(function() {
    $(".ui-datepicker-header").addClass("round_top");
  });

  $(".faux_image").click(function() {
    $("#viewport").css("left", "0");
    $(".faux_image").css("left", "-9999px");
  });

  $("#septa_left_navigation form#septa_location_destination_planner").css(
    "display",
    "block"
  );
  $(".septa_trip_planner_links_container").css("display", "none");
  $("#temp_img").css("display", "none");
  $(".slideshow").css("display", "block");

  $("#septa_left_navigation ul#septa_choose_service li#septa_rail").hover(
    function() {
      $(this)
        .find("a")
        .css("background", "#c9cacd"),
        $(this)
          .find("div")
          .css("visibility", "visible");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $(
    "#septa_left_navigation ul#septa_choose_service li#septa_market_frankford_line"
  ).hover(
    function() {
      $(this)
        .find("a")
        .css("background", "#cfdaf0"),
        $(this)
          .find("div")
          .css("visibility", "visible");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $(
    "#septa_left_navigation ul#septa_choose_service li#septa_broad_street_line"
  ).hover(
    function() {
      $(this)
        .find("a")
        .css("background", "#fee2c8"),
        $(this)
          .find("div")
          .css("visibility", "visible");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $("#septa_left_navigation ul#septa_choose_service li#septa_trolleys").hover(
    function() {
      $(this)
        .find("a")
        .css("background", "#d6dfcb"),
        $(this)
          .find("div")
          .css("visibility", "visible");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $(
    "#septa_left_navigation ul#septa_choose_service li#septa_norristown_line"
  ).hover(
    function() {
      $(this)
        .find("div")
        .css("visibility", "visible"),
        $(this)
          .find("a")
          .css("background", "#e3d1e6");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $("#septa_left_navigation ul#septa_choose_service li#septa_buses").hover(
    function() {
      $(this)
        .find("div")
        .css("visibility", "visible"),
        $(this)
          .find("a")
          .css("background", "#c9cacd");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $(" #septa_left_navigation ul#septa_choose_service li#cct_rail").hover(
    function() {
      $(this)
        .find("div")
        .css("visibility", "visible"),
        $(this)
          .find("a")
          .css("background", "#cfdaf0");
    },
    function() {
      $(this)
        .find("a")
        .css("background", ""),
        $(this)
          .find("div")
          .css("visibility", "hidden");
    }
  );
  $("#septa_date").append("<div class='time_container'></div>");
  // Possible alfresco fix$(".time_container").insertBefore("form");
  //$(".septa_planners_container .time_container").remove();
  $("#septa_footer .time_container").remove();
  $(".time_container").html(
    "<p class='septa_day_of_week'></p><ul class='septa_digital_date clearfix'><li class='month'></li><li class='date'></li><li class='year'></li></ul>"
  );

  $(".septa_day_of_week").text(myDay());
  $(".septa_digital_date .month").text(myMonth());
  $(".septa_digital_date .date").text(myDate());
  $(".septa_digital_date .year").text(myYear());
  $(function() {
    $("#tabs").tabs();
  });

  $("input#from").focus(function() {
    myval = $(this).attr("value");
    if (myval == "From") {
      $(this).attr("value", "");
    } else {
      return false;
    }
  });

  $("input#to").focus(function() {
    toval = $(this).attr("value");
    if (toval == "To") {
      $(this).attr("value", "");
    } else {
      return false;
    }
  });
});

sfHover = function() {
  var sfEls = document.getElementById("nav").getElementsByTagName("LI");
  for (var i = 0; i < sfEls.length; i++) {
    sfEls[i].onmouseover = function() {
      this.className += " sfhover";
    };
    sfEls[i].onmouseout = function() {
      this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
    };
  }
};
if (window.attachEvent) window.attachEvent("onload", sfHover);

// Edit the strings below this line
var startExample = "13th & Market";
var endExample = "";
var zip = "19107";
// End edit block

// Builds the destination URL for Google
function buildURL() {
  var loc = "http://www.google.com/maps?ie=UTF8&f=d&";

  for (var i = 0; i < document.simplePlanner.length - 1; i++) {
    if (document.simplePlanner[i].name == "from")
      loc +=
        "saddr=" + document.simplePlanner[i].value.replace("&", "%26") + "&";
    if (document.simplePlanner[i].name == "to")
      loc +=
        "daddr=" + document.simplePlanner[i].value.replace("&", "%26") + "&";
    if (document.simplePlanner[i].name == "date")
      loc += "date=" + document.simplePlanner[i].value + "&";
    if (document.simplePlanner[i].name == "time")
      loc += "time=" + document.simplePlanner[i].value + "&";
  }
  if (document.simplePlanner.timesel[0].checked) loc += "ttype=dep&";
  if (document.simplePlanner.timesel[1].checked) loc += "ttype=arr&";
  loc += "dirflg=r";
  location.href = loc;
  return loc;
}

// Builds the destination URL for Plan My Trip
function planTRIP() {
  //var loc = '/site/planmytrip.html';
  var loc = "http://airs.septa.org/bin/query.exe/en?";
  for (var i = 0; i < document.simplePlanner.length - 1; i++) {
    if (document.simplePlanner[i].name == "from")
      loc +=
        "s=" +
        document.simplePlanner[i].value.replace("&", "%26") +
        "?&SALL=1&";
    if (document.simplePlanner[i].name == "to")
      loc +=
        "z=" +
        document.simplePlanner[i].value.replace("&", "%26") +
        "?&ZALL=1&getstop=1&";
    if (document.simplePlanner[i].name == "date")
      loc += "date=" + document.simplePlanner[i].value + "&";
    if (document.simplePlanner[i].name == "time")
      loc += "time=" + document.simplePlanner[i].value + "&";
  }
  if (document.simplePlanner.timesel[0].checked) loc += "timesel=depart";
  if (document.simplePlanner.timesel[1].checked) loc += "timesel=arrive";
  location.href = loc;
  return loc;
}
/* EXAMPLES */

/* IE only */
DD_roundies.addRule(".roundify", "10px");

/* varying radii, IE only */
DD_roundies.addRule(".something_else", "10px 4px");

/* varying radii, "all" browsers */
DD_roundies.addRule(".round_top", "10px 10px 0 0", true);
DD_roundies.addRule(".round_all", "10px", true);
DD_roundies.addRule(".round_bottom", "0 0 10px 10px", true);

$(function() {
  $("#datepicker").datepicker();
  $("#ui-datepicker-div").addClass("round_all");
  $(".ui-datepicker-header").addClass("round_top");
});
