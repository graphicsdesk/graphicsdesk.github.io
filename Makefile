IMG_DIR := public/images

INPUTS := $(wildcard $(IMG_DIR)/*.png)
OUTPUTS := $(patsubst $(IMG_DIR)/%.png,$(IMG_DIR)/%.webp,$(INPUTS))

webp: $(OUTPUTS)

$(IMG_DIR)/%.webp: $(IMG_DIR)/%.png
	cwebp -q 85 $< -o $@

clean:
	rm -f $(OUTPUTS)

all: clean webp