import os
from PIL import Image

def optimize_images(directory):
    print(f"Optimizing images in {directory}...")
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                file_name, _ = os.path.splitext(file_path)
                webp_path = f"{file_name}.webp"
                
                try:
                    with Image.open(file_path) as img:
                        # Resize if too large (max 1200px width)
                        if img.width > 1200:
                            ratio = 1200 / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                        
                        # Save as WebP
                        img.save(webp_path, 'WEBP', quality=80)
                        print(f"Converted: {file} -> {os.path.basename(webp_path)}")
                        
                        # Optional: Remove original if you want, but safe to keep for now
                        # os.remove(file_path) 
                except Exception as e:
                    print(f"Error converting {file}: {e}")

if __name__ == "__main__":
    optimize_images("assets/images")
