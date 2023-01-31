//This is my function for calculating the grade

$('#btnCalc').click(function () {
    //I assign all the form values to a variable
    var assignment = $('#assignment').val();
    var quiz = $('#quiz').val();
    var groupProject = $('#groupProject').val();
    var midterm = $('#midterm').val();
    var final = $('#final').val();
    var intex = $('#intex').val();
    //I then divide the values by 100 to get their percentage and multiply that by the 
    //weighted percentage.
    var assignmentScore = ((assignment / 100) * .5);
    var quizScore = ((quiz / 100) * .1);
    var groupProjectScore = ((groupProject / 100) * .1);
    var midtermScore = ((midterm / 100) * .1);
    var finalScore = ((final / 100) * .1);
    var intexScore = ((intex / 100) * .1);
    //To finish up I add up all the percentage Calculations to get the final Score.
    let outputNumber = Math.round(100 * (assignmentScore + groupProjectScore + midtermScore + finalScore + intexScore + quizScore));
    //Then I print the output  by taking the calculated output number and placing it into an output sentence.
    $(document).ready(function () {
        var output = $('#output');
        let outputSentence = "Your grade in IS 413 will be: " + outputNumber + "%"
        output.html(outputSentence);
    })
})