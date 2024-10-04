from model import model # This is the YOLO model
import cv2

# Define green color (BGR format)
green_color = (0, 255, 0)

detection_threshold = 0.6

# COCO class labels (assuming YOLOv8 with COCO dataset)
class_labels = {
    0: "Person",
    # Add other class labels if needed
}

# Open video capture (0 for the default camera)
cap = cv2.VideoCapture(0)

# Ensure the video capture is opened
if not cap.isOpened():
    print("Error: Cannot open video stream.")
    exit()

while True:
    ret, frame = cap.read()  # Capture frame

    if not ret:
        print("Failed to capture frame")
        break

    # Object detection
    results = model(frame)

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
                cv2.rectangle(frame, (x1, y1), (x2, y2), green_color, 3)
                
                # Display label if it's a "Person"
                if class_id in class_labels:
                    label = f"{class_labels[class_id]}: {score:.2f}"
                    label_size, base_line = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2)
                    
                    # Draw the label background in green
                    top_left = (x1, y1 - label_size[1])
                    bottom_right = (x1 + label_size[0], y1)
                    cv2.rectangle(frame, top_left, bottom_right, green_color, cv2.FILLED)

                    # Put the label text above the bounding box (white text)
                    cv2.putText(frame, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)

    # Display the resulting frame
    cv2.imshow('Object Detection', frame)

    # Press 'q' to exit the video stream
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release everything
cap.release()
cv2.destroyAllWindows()
