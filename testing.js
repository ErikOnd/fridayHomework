function halfTree(height) {
    for (i = 0; i <= height; i++) {
        let tree = '';

        for (x = height; x >= i; x--) {
            tree += ' ';
        }

        for (j = 1; j <= i; j += 0.5) {

            tree += '*';
        }
        console.log(tree);
    }
}

halfTree(10)