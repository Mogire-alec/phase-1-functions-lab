// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);
}

// Convert blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Calculate total distance traveled in feet between two locations
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free for first 400 feet
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance <= 2500) {
        return 25; // Flat rate of $25 for 2000-2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet not allowed
    }
}

// Exporting functions (if using Node.js or module-based setup)
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};