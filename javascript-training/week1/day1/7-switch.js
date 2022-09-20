function calculateNumberInSpanish(number) {
    /**
     * 90+ is an A
     * 80-89 is a B
     * 70-79 is a C
     */
    
    switch (number) {
        // cases are not block scoped and it will "fall through" to the next case if no break is specified
        case 1:
            console.log('Uno');
            break; // Exit the switch block
        case 2:
        case 'Two':
            console.log('Dos');
            break;
        case 3:
            console.log('Tres');
            break;
        default: // This runs if no case met what we were looking for
            console.log('We do not support that number');
            break;
    }
}

calculateNumberInSpanish(5);