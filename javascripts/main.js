console.log('This would be the main JS file.');
$(function(){
  var commentCanvas = $('#commentCanvas')[0];
  var player = $('#player')[0];
  window.cm = new CommentManager(commentCanvas);
  cm.init();
  player.style.height = '200px';
  cm.start();
  var modes = [1,2,3,4,5,6,7,8];
  var testComments =[];
  modes.forEach(function(n){
    testComments.push({mode:n,text:'mode'+n});
  });
  modes.forEach(function(n){
    cm.send(testComments[n-1]);
  });
});
