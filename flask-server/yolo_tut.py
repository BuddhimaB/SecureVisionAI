from model import model
import cv2

# Path to your image file
IMAGE_PATH = 'C:\\Users\\ASUS\\OneDrive - University of Moratuwa\\SEM 05 project - Editable\\flask-backend-main\\test02.jpg'

detection_threshold=0.85
green_color=(0,255,0)

# Read the image from the given path
image = cv2.imread(IMAGE_PATH)

class_labels = {
    0: "Person",
    # Add other class labels if needed
}

# Check if the image was successfully loaded
if image is None:
    print("Error: Unable to load image.")
else:
    # Display the image in a window

    results=model(image)

    for result in results:
        detections = []
        for r in result.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = r
            x1 = int(x1)
            x2 = int(x2)
            y1 = int(y1)
            y2 = int(y2)
            class_id = int(class_id)

            if score > detection_threshold:
                detections.append([x1, y1, x2, y2, score])
                
                # Draw the rectangle in green
                cv2.rectangle(image, (x1, y1), (x2, y2), green_color, 3)
                
                # Display label if it's a "Person"
                if class_id in class_labels:
                    label = f"{class_labels[class_id]}: {score:.2f}"
                    label_size, base_line = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2)
                    
                    # Draw the label background in green
                    top_left = (x1, y1 - label_size[1])
                    bottom_right = (x1 + label_size[0], y1)
                    cv2.rectangle(image, top_left, bottom_right, green_color, cv2.FILLED)

                    # Put the label text above the bounding box (white text)
                    cv2.putText(image, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)


    cv2.imshow('human', image)

    cv2.waitKey(0)  # 0 means waiting indefinitely for a key press
    cv2.destroyAllWindows()  # Closes the window after key press
