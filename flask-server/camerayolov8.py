# detection.py
from model import model  # Assuming YOLO model is imported
import cv2
import os

output_folder = "annotated_frames"  # Folder to save annotated frames
if not os.path.exists(output_folder):
    os.makedirs(output_folder)
 # To give unique names to saved frames



def process_video_frames(detection_threshold=0.6):
    frame_count = 0 
    # Define green color (BGR format)
    green_color = (0, 255, 0)

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
        return None
    previous_human_count = 0
    while True:
        ret, frame = cap.read()  # Capture frame
        if not ret:
            print("Failed to capture frame")
            break

        # Object detection
        results = model(frame)

        current_human_count = 0 

        for result in results:
            for r in result.boxes.data.tolist():
                x1, y1, x2, y2, score, class_id = r
                x1, y1, x2, y2, class_id = int(x1), int(y1), int(x2), int(y2), int(class_id)

                if score > detection_threshold:
                    # Draw the rectangle in green
                    cv2.rectangle(frame, (x1, y1), (x2, y2), green_color, 3)
                    current_human_count += 1

                    # Display label if it's in class labels
                    if class_id in class_labels:
                        label = f"{class_labels[class_id]}: {score:.2f}"
                        label_size, base_line = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2)

                        # Draw the label background in green
                        top_left = (x1, y1 - label_size[1])
                        bottom_right = (x1 + label_size[0], y1)
                        cv2.rectangle(frame, top_left, bottom_right, green_color, cv2.FILLED)

                        # Put the label text above the bounding box (white text)
                        cv2.putText(frame, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)
                        # Save the frame with annotations
                        # frame_filename = os.path.join(output_folder, f"frame_{frame_count}.jpg")
                        # cv2.imwrite(frame_filename, frame)
                        # print(f"Frame saved: {frame_filename}")
        if current_human_count > 0 or current_human_count != previous_human_count:
            frame_filename = os.path.join(output_folder, f"frame_{frame_count}.jpg")
            cv2.imwrite(frame_filename, frame)
            print(f"Frame saved: {frame_filename}")

        previous_human_count = current_human_count  # Update the previous count
        frame_count += 1
        # Encode the frame as JPEG
        ret, jpeg = cv2.imencode('.jpg', frame)
        print("Image is:", jpeg)
        if not ret:
            continue

        # Yield the frame as a byte stream
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n\r\n')
          # Increment frame counter

    # Release everything when done
    cap.release()
    cv2.destroyAllWindows()
