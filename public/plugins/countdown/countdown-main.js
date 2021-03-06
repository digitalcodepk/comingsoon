$(document).ready(function () {
  var e = new Date("Jan 25 2022 17:02:37");
  e = e.getTime();
  var a = new Date();
  a = a.getTime();
  var o = new Date("Jan 1 2022 17:02:37");
  (o = o.getTime()),
    $(".countdown-timer").final_countdown({
      start: e / 1e3,
      end: o / 1e3,
      now: a / 1e3,
      selectors: {
        value_seconds: ".clock-seconds .val",
        canvas_seconds: "canvas-seconds",
        value_minutes: ".clock-minutes .val",
        canvas_minutes: "canvas-minutes",
        value_hours: ".clock-hours .val",
        canvas_hours: "canvas-hours",
        value_days: ".clock-days .val",
        canvas_days: "canvas-days",
      },
      seconds: {
        borderColor: $(".type-seconds").attr("data-border-color"),
        borderWidth: "5",
      },
      minutes: {
        borderColor: $(".type-minutes").attr("data-border-color"),
        borderWidth: "5",
      },
      hours: {
        borderColor: $(".type-hours").attr("data-border-color"),
        borderWidth: "5",
      },
      days: {
        borderColor: $(".type-days").attr("data-border-color"),
        borderWidth: "5",
      },
    });
}),
  jQuery(window).on("resize", function (e) {
    var a = new Date("Jan 25 2020 17:02:37");
    a = a.getTime();
    var o = new Date();
    o = o.getTime();
    var r = new Date("Jan 31 2020 17:02:37");
    (r = r.getTime()),
      $(".countdown-timer").final_countdown({
        start: a / 1e3,
        end: r / 1e3,
        now: o / 1e3,
        selectors: {
          value_seconds: ".clock-seconds .val",
          canvas_seconds: "canvas-seconds",
          value_minutes: ".clock-minutes .val",
          canvas_minutes: "canvas-minutes",
          value_hours: ".clock-hours .val",
          canvas_hours: "canvas-hours",
          value_days: ".clock-days .val",
          canvas_days: "canvas-days",
        },
        seconds: {
          borderColor: $(".type-seconds").attr("data-border-color"),
          borderWidth: "5",
        },
        minutes: {
          borderColor: $(".type-minutes").attr("data-border-color"),
          borderWidth: "5",
        },
        hours: {
          borderColor: $(".type-hours").attr("data-border-color"),
          borderWidth: "5",
        },
        days: {
          borderColor: $(".type-days").attr("data-border-color"),
          borderWidth: "5",
        },
      });
  });
