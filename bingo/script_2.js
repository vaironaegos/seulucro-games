const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(event) {
    console.log("Connection established!");
    socket.send("Hello from the client!");
};

socket.onmessage = function(event) {
    console.log("Received message:", event.data);
};

socket.onerror = function(error) {
    console.error("WebSocket error:", error);
};

