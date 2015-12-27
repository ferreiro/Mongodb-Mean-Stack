Javascript is executed in a loop that runs events handler.

while(waitForEvent()) {
	processEvent();
}

Aun I/O operation for example is connecting to a Database…
Callbacks are functions that executes after an operation is done.

Handle I/O #2 ——> processEvent()
Handle I/O #3		  |
Handle I/O #4		  |
			Wait

Example:
	
	// Asynchronous code
	setTimeOut(function() {
		console.log(‘In timeout!’);
	}, 0);

	// Synchronous code
	console.log(‘Not in timeout’);

In this example, it’s print “Not in timeout“ before, because
Javascript loop will add the event handler from SetTimeOut to be
executed on the next iteration. So the first thing that will be printed is the console.log

12 nested callbacks, maybe the problem is that you’re nesting to many callbacks
and at certain point is really complicated to test.

