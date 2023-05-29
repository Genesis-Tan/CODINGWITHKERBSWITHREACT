(function () {
  var work = function () {
    console.log("working hard");
  };

  var doWork = function (f) {
    console.log(f);
    f();
  };

  doWork(work);
  // try uncommenting the code below later
  doWork(work());
})();

(function () {
  var createWorker = function () {
    const task1 = function () {
      console.log("Doing job 1");
    };
    const task2 = function () {
      console.log("Doing job 2");
    };
    return { job1: task1, job2: task2 };
  };
  // try creating a worker below this line and have them do job1, and job2
  var worker = createWorker();
  worker.job1();
  worker.job2();
  
})();
