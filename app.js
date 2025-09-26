#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char filename[] = "main";
    char project[] = "go-tools";

    printf("Project: %s, File: %s\n", project, filename);

    FILE *fp = fopen(filename, "r");
    if (fp == NULL) {
        perror("Cannot open file");
        return 1;
    }

    char line[256];
    while(fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }
    fclose(fp);

    return 0;
}

# Additional Implementation 1760954188

# Additional Implementation 1760954188

# Code Update 1760954188-4428

# Code Update 1760954188-835

# Additional Implementation 1760954188
