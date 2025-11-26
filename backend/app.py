from flask import Flask, jsonify
from processing import load_data, smart_filter
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def get_all_data():
    df = load_data()
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/filter/<column>/<value>')
def filter_dynamic(column, value):
    df = load_data()
    filtered_df = smart_filter(df, column, value)
    return jsonify(filtered_df.to_dict(orient='records'))


@app.route('/api/properties/<int:prop_id>')
def get_property(prop_id):
    df = load_data()
    try:
        row = df[df['id'] == prop_id].iloc[0]
    except Exception:
        return jsonify({'error': 'Property not found'}), 404
    # Convert pandas Series to dict, ensure features are list
    prop = row.to_dict()
    return jsonify(prop)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
