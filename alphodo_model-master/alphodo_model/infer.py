import keras
import numpy as np
import sys
import os
from PIL import Image
import base64
from io import BytesIO

import config


def main():
    pass


def parse(image_b64):
    # input (248, 248, 3) ndarray

    image_pil = Image.open(BytesIO(base64.b64decode(image_b64)))
    image_pil = image_pil.resize((248, 248))
    image = np.array(image_pil)

    image = image.reshape(-1, 248, 248, 3)

    load_model: keras.Model
    load_model = keras.models.load_model(
        os.path.join(os.path.join(config.parse()['MOD_HOME'], 'MODEL_IDCNN'), '1')
    )
    result = load_model.predict(image)
    result = result.tolist()[0]
    dis = ['ulcer', 'ciner', 'powder', 'mosaic', 'rancid', 'mildew', 'fungi']
    for i, r in enumerate(result):
        if r:
            ressssult = dis[i]
            break
    print(ressssult,end='')
    return ressssult

if __name__ == '__main__':
    parse(sys.argv[1])
