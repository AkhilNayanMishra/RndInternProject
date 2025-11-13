#include <opencv2/opencv.hpp>
#include <iostream>

// This is the core logic the assessment asked for
cv::Mat process_image(cv::Mat inputMat) {
    cv::Mat grayMat;
    cv::Mat cannyMat;

    // 1. Convert to grayscale
    cv::cvtColor(inputMat, grayMat, cv::COLOR_BGR2GRAY);

    // 2. Apply Canny edge detection
    cv::Canny(grayMat, cannyMat, 80, 150);

    return cannyMat;
}

int main() {
    // 1. Load a dummy frame
    cv::Mat image = cv::imread("lena.png", cv::IMREAD_COLOR);
    if (image.empty()) {
        std::cerr << "Error: Could not load image 'lena.png'." << std::endl;
        return -1;
    }

    // 2. Process it
    cv::Mat processedImage = process_image(image);

    // 3. Save the output
    cv::imwrite("processed_output.png", processedImage);
    std::cout << "Success! Saved 'processed_output.png'" << std::endl;
    return 0;
}