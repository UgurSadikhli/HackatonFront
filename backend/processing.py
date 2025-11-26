import pandas as pd
import os

def load_data():
    # Load sample data file from backend/data/sample_data.csv if present, otherwise return a small DataFrame
    repo_root = os.path.dirname(os.path.abspath(__file__))
    data_file = os.path.join(repo_root, 'data', 'sample_data.csv')
    if os.path.exists(data_file):
        df = pd.read_csv(data_file)
        # Ensure required detail columns exist; if not, add sensible defaults
        if 'title' not in df.columns and 'name' in df.columns:
            df['title'] = df['name']
        # Create missing columns with defaults
        for col, default in [('address', ''), ('beds', 0), ('baths', 0), ('reception', 0), ('epc', ''), ('description', ''), ('features', '[]'), ('image', '')]:
            if col not in df.columns:
                df[col] = default
        # Normalize features to list where possible
        if 'features' in df.columns:
            import ast
            def _to_list(x):
                try:
                    return ast.literal_eval(x) if isinstance(x, str) else x
                except Exception:
                    return [x]
            df['features'] = df['features'].apply(_to_list)
        return df
    # fallback sample data
    df = pd.DataFrame([
        {"id": 1, "title": "Cozy apartment", "address": "Downtown, Tirana", "city": "Tirana", "price": 120000, "beds": 2, "baths": 1, "reception": 1, "epc": "C", "description": "A cozy apartment in the city center.", "features": ["Balcony", "Parking"], "image": "https://images.unsplash.com/photo-1545017861-43f97a6f41c0", "images": ["https://images.unsplash.com/photo-1545017861-43f97a6f41c0", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"], "pipelines": "short", "number_of_units": 12, "key_dates": ["2023","2024"], "reference": "REF-001"},
        {"id": 2, "title": "Beach house", "address": "Seafront, Durres", "city": "Durres", "price": 350000, "beds": 4, "baths": 3, "reception": 2, "epc": "B", "description": "A beach house with a sea view.", "features": ["Sea View", "Garden"], "image": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", "images": ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae"], "pipelines": "medium", "number_of_units": 8, "key_dates": ["2022","2025"], "reference": "REF-002"},
        {"id": 3, "title": "Mountain cabin", "address": "Highlands, Korce", "city": "Korce", "price": 80000, "beds": 3, "baths": 2, "reception": 1, "epc": "D", "description": "A rustic cabin in the mountains.", "features": ["Wood Stove", "Hike Trails"], "image": "https://images.unsplash.com/photo-1505691723518-36a4e6d5f7ef", "images": ["https://images.unsplash.com/photo-1505691723518-36a4e6d5f7ef"], "pipelines": "long", "number_of_units": 3, "key_dates": ["2019","2023"], "reference": "REF-003"},
    ])
    return df


def smart_filter(df, column, value):
    if column not in df.columns:
        return df[0:0]
    # Basic filter: case-insensitive contains
    filtered = df[df[column].astype(str).str.contains(str(value), case=False, na=False)]
    return filtered
